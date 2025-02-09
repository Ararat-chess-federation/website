import imageManipulation from "./image-manipulations";

export default (plugin) => {
  const prevManipulations = plugin.services["image-manipulation"];

  plugin.services["image-manipulation"] = {
    ...prevManipulations,
    ...imageManipulation,
  };

  return plugin;
};
