// Pages

export interface Team {
  attributes: {
    name: string;
    text: string;
    bild: Picture;
  };
}

export interface USP {
  titel: string;
  untertitel: string;
  pfad: string;
  bild: Picture;
}

export interface Homepage {
  attributes: {
    titel: string;
    slug: string;
    heroText: string;
    heroBild: Picture;
    statementTitle: string;
    statementText: string;
    presseStatement: string;
    hero2Bild: Picture;
    karteBild: Picture;
    produkte: {
      data: Product[];
    };
    nachhaltigkeitSaeulen: Pillar[];
    nachhaltigkeitSaeulenTitel: string;
    nachhaltigkeitSaeulenUntertitel: string;
    presse: {
      data: Press[];
    };
    logos: Logo[];
    USP: USP[];
  };
  id: number;
}

export interface Page {
  id: number;
  attributes: {
    titel: string;
    slug: string;
    bild: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    CTA: {
      data: CTA;
    };
    text: string;

    topSektion: Section;
    bannerSektion: Section;
    unterSektion: Section;
  };
}

// Components

export type CTA = {
  attributes: {
    text: string;
    link: string;
    bildposition: string;
    bild: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export interface Logo {
  bild: Picture;
  link: string;
  titel: string;
}

export interface Picture {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface Pillar {
  titel: string;
  text: string;
  bild: Picture;
  index: number;
}

export interface Product {
  attributes: {
    bild: Picture;
    link: string;
    titel: string;
    untertitel: string;
  };
  id: number;
}

export interface Press {
  attributes: {
    titel: string;
    untertitel: string;
    link: string;
    bild: Picture;
  };
  id: number;
}

export type Section = {
  titel: string;
  text: string;
  id: number;
  bild: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  bild1: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  bild2: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

export interface Testimonial {
  attributes: {
    name: string;
    text: string;
    jobtitel: string;
    bild: Picture;
  };
}
