import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappFloatingButton({ visible }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const phone = '03058666266';

  const openWhatsApp = () => {
    const normalized = phone.replace(/^0+/, '');
    const waLink = `https://wa.me/92${normalized}`;
    window.open(waLink, '_blank');
    setShowConfirm(false);
  };

  if (!visible) return null; // 👈 jab tak visible na ho, button show hi mat karo

  return (
    <>
      {/* Floating button */}
      <div
        aria-hidden
        onClick={() => setShowConfirm(true)}
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          zIndex: 1050,
          cursor: 'pointer',
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center shadow"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#25D366',
            color: 'white',
            boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
          }}
          title={`Chat on WhatsApp: ${phone}`}
        >
          <FaWhatsapp size={24} />
        </div>
      </div>

      {/* Confirmation modal */}
      {showConfirm && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1060,
            padding: 20,
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="card"
            style={{
              maxWidth: 380,
              width: '100%',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Redirect to WhatsApp?</h5>
              <p className="card-text">
                Do you want to open WhatsApp chat with <strong>{phone}</strong>?
              </p>
              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowConfirm(false)}
                >
                  No
                </button>
                <button className="btn btn-success" onClick={openWhatsApp}>
                  Yes, open chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
