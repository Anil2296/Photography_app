import { useEffect } from 'react';
import { PhotographerCard } from './PhotographerCard';
import { PhotographerForm } from './PhotographerForm';
import { usePhotographerReducer } from './UsePhotographerReducer';
import { useLoading } from '../../context/LoadingContext';
import { api } from '../../services/api';
import './PhotographerDetails.css';

function PhotographerComponent() {
    const { state, dispatch } = usePhotographerReducer();
    const { setLoading } = useLoading();

    useEffect(() => {
        const loadPhotographers = async () => {
            setLoading(true);
            await api.getPhotographers(dispatch);

            setLoading(false);
        };
        loadPhotographers();
    }, []);

    const handleSave = async () => {
        setLoading(true);
        try {
            if (state.editingId) {
                await api.updatePhotographer(state.editingId, state.formData, dispatch);
                alert('Photographer updated successfully!');
            } else {
                await api.addPhotographer(state.formData, dispatch);
                alert('New photographer added successfully!');
            }
        } catch (error) {
            console.error('Failed to save photographer:', error);
            alert('Failed to save photographer');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => dispatch({ type: 'CLOSE_DIALOG' });
    
    const handleDelete = async (id: string) => {
        const photographer = state.photographers[id];
        if (confirm(`Are you sure you want to delete ${photographer.name}?`)) {
            setLoading(true);
            try {
                await api.deletePhotographer(id, dispatch);
                alert('Photographer deleted successfully!');
            } catch (error) {
                console.error('Failed to delete photographer:', error);
                alert('Failed to delete photographer');
            } finally {
                setLoading(false);
            }
        }
    };
    
    const handleEdit = (id: string) => dispatch({ type: 'OPEN_EDIT_DIALOG', id, photographer: state.photographers[id] });

    return (
        <div>
            <button id="new-Photographer" onClick={() => dispatch({ type: 'OPEN_ADD_DIALOG' })}>Add New Photographer</button>
            
            <PhotographerForm
                isOpen={state.showDialog}
                formData={state.formData}
                editingId={state.editingId}
                errors={state.errors}
                onFormDataChange={(formData) => dispatch({ type: 'UPDATE_FORM', formData })}
                onSave={handleSave}
                onCancel={handleCancel}
            />
            
            <header>
                <h1>Photographer Details</h1>
            </header>
            <br />
            <div className="app-container">
                {Object.entries(state.photographers).map(([key, photographer]) => (
                    <PhotographerCard
                        key={key}
                        id={key}
                        photographer={photographer}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
        </div>
    );
}

export default PhotographerComponent;