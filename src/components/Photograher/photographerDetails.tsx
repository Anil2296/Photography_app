import { PhotographerCard } from './PhotographerCard';
import { PhotographerForm } from './PhotographerForm';
import { usePhotographerReducer } from './usePhotographerReducer';
import './PhotographerDetails.css';

function PhotographerComponent() {
    const { state, dispatch } = usePhotographerReducer();

    const handleSave = () => {
        if (state.editingId) {
            dispatch({ type: 'UPDATE_PHOTOGRAPHER', id: state.editingId, photographer: state.formData });
            alert('Photographer updated successfully!');
        } else {
            const newId = `P${Object.keys(state.photographers).length + 1}`;
            dispatch({ type: 'ADD_PHOTOGRAPHER', id: newId, photographer: state.formData });
            alert('New photographer added successfully!');
        }
    };

    const handleCancel = () => dispatch({ type: 'CLOSE_DIALOG' });
    
    const handleDelete = (id: string) => {
        const photographer = state.photographers[id];
        if (confirm(`Are you sure you want to delete ${photographer.name}?`)) {
            dispatch({ type: 'DELETE_PHOTOGRAPHER', id });
            alert('Photographer deleted successfully!');
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