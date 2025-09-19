import type { Photographer } from '../Common/data';

interface PhotographerFormProps {
  isOpen: boolean;
  formData: Photographer;
  editingId: string | null;
  errors: { [key: string]: string };
  onFormDataChange: (data: Photographer) => void;
  onSave: () => void;
  onCancel: () => void;
}

const validateForm = (data: Photographer): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};
  
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.level) errors.level = 'Experience level is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone is required';
  } else if (!/^\d+$/.test(data.phone)) {
    errors.phone = 'Phone must contain only numbers';
  } else if (data.phone.length < 7) {
    errors.phone = 'Phone must be at least 7 digits';
  }
  
  return errors;
};

export function PhotographerForm({isOpen, formData, editingId, onFormDataChange, onSave, onCancel }: PhotographerFormProps) {
  if (!isOpen) return null;

  const handleSave = () => {
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      onSave();
    }
  };

  const currentErrors = validateForm(formData);
  const isValid = Object.keys(currentErrors).length === 0;

  return (
    <div className="dialog-overlay">
      <div className="photographer-dialog">
        <h3>
          {editingId ? "Edit Photographer" : "Add Photographer"}
        </h3>
        
        <label>Name</label>
        <input 
          value={formData.name} 
          onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
          className={currentErrors.name ? 'error' : ''}
        />
        {currentErrors.name && <span className="error-text">{currentErrors.name}</span>}
        
        <label>Experience Level</label>
        <select 
          value={formData.level} 
          onChange={(e) => onFormDataChange({ ...formData, level: e.target.value })}
          className={currentErrors.level ? 'error' : ''}
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Professional">Professional</option>
          <option value="Expert">Expert</option>
        </select>
        {currentErrors.level && <span className="error-text">{currentErrors.level}</span>}
        
        <label>Email</label>
        <input 
          type="email"
          value={formData.email} 
          onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
          className={currentErrors.email ? 'error' : ''}
        />
        {currentErrors.email && <span className="error-text">{currentErrors.email}</span>}
        
        <label>Phone</label>
        <input 
          type="tel"
          value={formData.phone} 
          onChange={(e) => onFormDataChange({ ...formData, phone: e.target.value })}
          className={currentErrors.phone ? 'error' : ''}
        />
        {currentErrors.phone && <span className="error-text">{currentErrors.phone}</span>}
        
        <div className="button-container">
          <button 
            id='b1' 
            onClick={handleSave}
            disabled={!isValid}
            className={!isValid ? 'disabled' : ''}
          >
            {editingId ? "Save Changes" : "Add"}
          </button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}