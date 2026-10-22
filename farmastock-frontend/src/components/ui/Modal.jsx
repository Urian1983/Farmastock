import { useEffect, useId, useRef } from 'react';

export default function Modal({ title, onClose, size = '', footer, children }) {
  const titleId = useId();
  const ref = useRef(null);

  useEffect(() => {
    const previo = document.activeElement;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onKey);
    ref.current?.focus();
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', onKey);
      previo?.focus?.();
    };
  }, [onClose]);

  return (
    <>
      <div className="modal fade show d-block" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} ref={ref}
           onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
        <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${size}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title h5 font-weight-bold" id={titleId}>{title}</h2>
              <button type="button" className="close" aria-label="Cerrar" onClick={onClose}><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">{children}</div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}
