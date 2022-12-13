module.exports = (fn) => {
  (req, res, next) => {
    fn.catch((err) => console.log(err));
  };
};
