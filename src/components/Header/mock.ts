import { HeaderProps } from ".";

export const mockHeader = {
  data: {
    id: "1",
    attributes: {
      blogName: "Rodrigo Silva",
      blogDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu nibh, commodo sed quam ac, laoreet consequat diam. In commodo ut erat sit amet lobortis. Etiam sit amet maximus est.",
      logo: {
        data: {
          attributes: {
            alternativeText: null,
            url: "assets/images/kurapika.jpeg",
          },
        },
      },
    },
  },
  showText: true,
} as HeaderProps;
