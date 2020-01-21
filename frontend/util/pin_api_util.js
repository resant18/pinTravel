export const fetchAllPins = () => {
  return $.ajax({
    method: "GET",
    url: `api/board_pins`
  });
};

export const fetchPinsFeed = page => {
  return $.ajax({
    method: "GET",
    url: `api/board_pins/feeds`,
    data: { page }
  });
};

export const fetchUserPins = (username, page) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${username}/pins`,
    data: { page }
  });
};

export const fetchBoardPins = (boardId, page) => {
  return $.ajax({
    method: "GET",
    url: `api/boards/${boardId}/pins`,
    data: { page }
  });
};

export const fetchPin = id => {
  return $.ajax({
    method: "GET",
    url: `api/pin_joins/${id}`
  });
};

export const createPin = (formData) => {
  return $.ajax({
    method: "POST",
    url: `api/pins`,
    data: formData,
    contentType: false,
    processData: false
  });
};

// export const createPinJoin = (pin, id) => {
//   return $.ajax({
//     method: "POST",
//     url: `api/boards/${id}/pin_joins`,
//     data: { pin }
//   });
// };

export const updatePin = pin => {
  return $.ajax({
    method: "PATCH",
    url: `api/pins/${pin.id}`,
    data: { pin }
  });
};

export const deletePin = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/pin/${id}`
  });
};
