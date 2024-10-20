import React from 'react';


/**
 * A React functional component that renders a fixed WhatsApp bubble in the bottom right corner of the screen.
 * When clicked, it opens the WhatsApp web app in a new tab with a pre-populated phone number.
 */
const WhatsAppBubble: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/573022349573', '_blank');
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full bg-green-500 p-4 shadow-lg transition-transform hover:scale-110"
      onClick={openWhatsApp}
    >
      <img src="src/assets/images/whatsapp.svg" alt="WhatsApp" className="h-8 w-8 fill-white"  />
    </div>
  );
};

export default WhatsAppBubble;
