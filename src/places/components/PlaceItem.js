import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceItem.css';

const PlaceItem = ({
  id, title, address, description, image, coordinates,
}) => {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirm] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirm(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirm(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirm(false);
    console.log('DELETING...');
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are yout sure?"
        footerClass="place-item___modal-actions"
        footer={(
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        )}
      >
        <p>
          Do you want to proceed and delete this place? Please note that it can&lsquot be
          undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
            <div className="place-item__actions">
              <Button inverse onClick={openMapHandler}>
                VIEW ON MAP
              </Button>
              {auth.isLoggedIn && <Button to={`/places/${id}`}>EDIT</Button>}
              {auth.isLoggedIn && (
                <Button danger onClick={showDeleteWarningHandler}>
                  DELETE
                </Button>
              )}
            </div>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
