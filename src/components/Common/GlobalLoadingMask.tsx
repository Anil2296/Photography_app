import { useLoading } from '../../context/LoadingContext';
import '../../styles/global.css';

export function GlobalLoadingMask() {
  const { loading } = useLoading();
  
  if (!loading) return null;
  
  return (
    <div className="loading-mask">
      <div className="spinner"></div>
    </div>
  );
}