import imageManipulation from "./image-manipulations";

export default (plugin) => {
  plugin.services["image-manipulation"] = imageManipulation();

  return plugin;
};
