exports.success = (res, data, token = undefined) => {
  const option = { status: 'success', length: data.length, data };
  if (token) option.token = token;
  return res.status(200).json(option);
};

exports.deleted = (res, message) => {
  res.status(200).json({
    status: 'success',
    message,
  });
};
