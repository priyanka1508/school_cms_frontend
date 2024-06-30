import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EventList.css";
import { getImagesService } from "../../service/services";
import { baseURL } from "../../routes/eventImagesRoutes";
import ImageModal from "../ImageModel/ImageModel"; // Import the modal component
import { AddMappingAction } from "../../actions/actions";




const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState("all");
  const [imageList, setImageList] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pageSize: 6 });
  const [maxPages, setMaxPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const eventListMapping = useSelector((state) => state.eventListMapping);
  const eventList = Object.keys(eventListMapping);

  // if want to add one more gallery photo with events like cleanliness drive
  // add it here, use below function
    //   const dispatch = useDispatch();
    //   dispatch(AddMappingAction({
    //     "key": "cleanliness_drive", 
    //     "value":"cleanliness_drive_event"
    //   }));

  useEffect(() => {
    const getImages = async () => {
      let queryParams = {
        populate: "*",
      };
      Object.keys(pagination).map((key) => {
        queryParams[`pagination[${key}]`] = pagination[key];
      });
      if (selectedEvent !== "all") {
        queryParams[`filters[event_name][$eqi]`] = selectedEvent;
      }
      const res = await getImagesService(queryParams);
      if (!res.data) {
        console.log("error in fetching images");
        return;
      }
      const allImages = res.data;
      const paginationData = res.data.meta.pagination;
      setMaxPages(paginationData.pageCount);
      const images = allImages.data.map((image) => {
        let imageObj = {
          imageId: image.attributes.image.data.id,
          createdAt: image.attributes.createdAt,
          imageUrl: `${baseURL}${image.attributes.image.data.attributes.url}`,
          imageName: image.attributes.image.data.attributes.name,
          imageDescription: image.attributes.description,
        };
        return imageObj;
      });
      setImageList([...imageList, ...images]);
    };
    getImages();
  }, [selectedEvent, pagination]);

  const handleClick = (event) => {
    setSelectedEvent(eventListMapping[event]);
    setPagination({ ...pagination, page: 1 });
    setImageList([]);
    console.log(`Clicked on: ${eventListMapping[event]}`);
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + imageList.length) % imageList.length
    );
  };
  const handleViewMore = () => {
    setPagination({ ...pagination, page: pagination.page + 1 });
  };

  return (
    <div className="py-5 px-40">
      <div className="flex flex-wrap gap-4">
        {eventList.map((item, index) => (
          <button
            key={index}
            className={`event-button ${
              selectedEvent === eventListMapping[item] ? "selected" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {imageList.map((image, index) => (
          <div
            className="event-card"
            key={index}
            onClick={() => openModal(index)}
          >
            <img
              src={image.imageUrl}
              alt={image.imageDescription}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex p-4 justify-start">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{image.imageDescription}</h3>
                <p className="text-gray-600 mt-2 justify-start flex">
                  {new Date(image.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {maxPages > pagination.page && (
        <div className="flex justify-center" onClick={() => handleViewMore()}>
          <div className="view-more mb-10">View More</div>
        </div>
      )}
      <ImageModal
        isOpen={isModalOpen}
        image={imageList[currentImageIndex]}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default EventList;
