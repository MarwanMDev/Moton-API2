const categoryRoute = require("./categoryRoutes");
const bookRoute = require("./bookRoute");
const bookRoutePublisher = require("./bookRoutePublisher");
const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const reviewRoute = require("./reviewRoute");
const wishlistRoute = require("./wishlistRoute");
const addressRoute = require("./addressRoute");
const couponRoute = require("./couponRoute");
const cartRoute = require("./cartRoute");
const favoriteRoute = require("./favoriteRoute");
const orderRoute = require("./orderRoute");
const contactRoute = require("./contactRoute");
const eventRoute = require("./eventRoute");
const eventFormRoute = require("./eventFormRoute");
const pageImageRoute = require("./pageImageRoute");
const uploadRoute = require("./uploadRoutes");
const uploadBookImage = require("./uploadBookImageRoute");
const uploadCategoryImage = require("./uploadCategoryImageRoute");
const uploadEventImage = require("./uploadEventImageRoute");
const uploadUsertImage = require("./uploadUserImageRoute");

const mountRouts = (app) => {
  app.use("/api/v1/categories", categoryRoute);
  app.use("/api/v1/books", bookRoute);
  app.use("/api/v1/publisher/books", bookRoutePublisher);
  app.use("/api/v1/users", userRoute);
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/reviews", reviewRoute);
  app.use("/api/v1/wishlist", wishlistRoute);
  app.use("/api/v1/addresses", addressRoute);
  app.use("/api/v1/coupons", couponRoute);
  app.use("/api/v1/cart", cartRoute);

  app.use("/api/v1/order", orderRoute);
  app.use("/api/v1/contact", contactRoute);
  app.use("/api/v1/events", eventRoute);
  app.use("/api/v1/eventform", eventFormRoute);
  app.use("/api/v1/pageimage", pageImageRoute);
  app.use("/api/v1/upload", uploadRoute);
  app.use("/api/v1/bookimageupload", uploadBookImage);
  app.use("/api/v1/categoryimageupload", uploadCategoryImage);
  app.use("/api/v1/eventimageupload", uploadEventImage);
  app.use("/api/v1/userimageupload", uploadUsertImage);
  app.use("/api/v1/favorite", favoriteRoute);
};

module.exports = mountRouts;
