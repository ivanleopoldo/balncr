import BaseCarousel, {
  Pagination as BasePagination,
  ICarouselInstance,
} from "react-native-reanimated-carousel";
import { cssInterop } from "nativewind";

const Carousel = cssInterop(BaseCarousel, {
  className: {
    target: "style",
    nativeStyleToProp: {
      height: true,
      width: true,
    },
  },
  containerClassName: {
    target: "containerStyle",
  },
});

const { Basic: BaseBasic, Custom: BaseCustom } = BasePagination;

const Basic = cssInterop(BaseBasic, {
  className: {
    target: "containerStyle",
  },
  dotClassName: {
    target: "dotStyle",
  },
  activeDotClassName: {
    target: "activeDotStyle",
  },
});

const Custom = cssInterop(BaseCustom, {
  className: {
    target: "containerStyle",
  },
  dotClassName: {
    target: "dotStyle",
  },
  activeDotClassName: {
    target: "activeDotStyle",
  },
});

const Pagination = { Basic, Custom };

export { Carousel, Pagination, type ICarouselInstance };
