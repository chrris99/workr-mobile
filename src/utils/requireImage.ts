export const requireImage = (name: string | undefined) => {
  const DEFAULT_IMAGE = require("../../assets/images/lunge-1.png");
  if (!name) return DEFAULT_IMAGE;

  switch (name) {
    case "barbell-bicep-curl-1.png":
      return require("../../assets/images/barbell-bicep-curl-1.png");
    case "bench-press-2.png":
      return require("../../assets/images/bench-press-2.png");
    case "push-up.png":
      return require("../../assets/images/push-up.png");
    case "cable-machine-tricep-extension-1.png":
      return require("../../assets/images/cabel-machine-tricep-extension-1.png");
    default:
      return DEFAULT_IMAGE;
  }
};
