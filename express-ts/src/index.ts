import express, { Application } from "express";
import { join } from "path";
import * as routes from "./routes/index";

const application = express();
const port = 3005; // default port to listen
const host = "localhost";

function applyMiddleware(app: Application) {
  // Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately. Generally, Helmet is just a collection of smaller middleware functions that set security-related HTTP headers (read more).
  // app.use(helmet());
}

function setupSwagger(app: Application) {}

function setupViewEngine(app: Application) {
  // Configure Express to use EJS
  app.set("views", join(__dirname, "views"));
  app.set("view engine", "ejs");
}

applyMiddleware(application);
setupSwagger(application);
setupViewEngine(application);

routes.register(application);

// start the express server
application.listen(port, host, () => {
  // tslint:disable-next-line:no-console
  console.log(`ExpressTs server running on http://${host}:${port}`);
});
