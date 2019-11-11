export const fetchUser = username => {
    return (
    $.ajax({
        method: "GET",
        url: `/api/users/${username}`
    })
)};

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users/'
  })
);

export const updateUser = (formData, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  })
);
