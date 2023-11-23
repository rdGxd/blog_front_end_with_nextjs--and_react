export type PostData = {
  setting: {
    data: {
      id: string;
      attributes: PostAttributes;
      updatedAt: "string";
      publishedAt: "string";
      cover: string;
    };
  };
};

export type PostAttributes = {
  blogName: string;
  blogDescription: string;
  logo: LogoAttributes;
  menuLink: MenuLinkAttributes;
  createdAt: string;
};

export type LogoAttributes = {
  data: {
    attributes: {
      alternativeText: null;
      url: string;
    };
  };
};

export type MenuLinkAttributes = {
  id: string;
  link: string;
  text: string;
  newTab: boolean;
};

export type Posts = {
  data: [
    {
      attributes: PostsAttributes;
    },
  ];
};

export type PostsAttributes = {
  slug: string;
  title: string;
  excerpt: string;
  content: PostContent;
};

export type PostContent = {
  type: string;
  children: PostChildren;
};

export type PostChildren = {
  text: string;
  type: string;
};

export type PostCover = {
  data: {
    id: string;
    attributes: PostCoverAttributes;
  };
};

export type PostCoverAttributes = {
  alternativeText: null; // Texto alternativo (pode ser nulo) para a imagem
  url: string; // URL da imagem de capa
};
