// OfferDetailsIframe.js (in your iframe app)
import React from 'react';
import { useParams } from 'react-router-dom';
import { offersData } from '../data'; // You can load the same data or fetch it

const OfferDetailsIframe = () => {
  const { offerId } = useParams();
  const offer = offersData.find((offer) => offer.offerId === parseInt(offerId));

  if (!offer) {
    return <p>Offer not found!</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{offer.offerName}</h1>
      <img src={offer.logoUrl} alt={offer.offerName} className="w-32 h-32 my-4 rounded-lg object-cover" />
      <p className="text-lg text-gray-500">Valid till: {offer.expiryDate}</p>
      <p className="text-md mt-4">
        {/* Additional offer details here */}
        Here you can show more details about the offer.
      </p>
    </div>
  );
};

export default OfferDetailsIframe;
