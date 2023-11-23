export type CoverProps = {
  data: {
    id: string;
    attributes: CoverAttributes;
  };
};

export type CoverAttributes = {
  alternativeText: null; // Texto alternativo (pode ser nulo) para a imagem
  url: string; // URL da imagem de capa
};
