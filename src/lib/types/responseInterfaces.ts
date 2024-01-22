// Pages

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
    nachhaltigkeitSaeulen: {
      data: Pillar[];
    };
    nachhaltigkeitSaeulenTitel: string;
    nachhaltigkeitSaeulenUntertitel: string;
    presse: {
      data: Press[];
    };
    logos: {
      data: Logo[];
    };
    USP: USP[];
  };
  id: number;
}

export interface ProjectPage {
  attributes: {
    titel: string;
    text: string;
    heroBild: Picture;
    logos: {
      data: Logo[];
    };
    zieleTop: {
      titel: string;
      untertitel: string;
    };
    zieleBottom: {
      titel: string;
      untertitel: string;
    };
    untertitel: string;
    partnerTop: {
      titel: string;
      untertitel: string;
    };
    produkte: {
      data: Product[];
    };
    footerBild: Picture;
    zieleBild: Picture;
    sektionTopTitel: string;
    sektionTopText: string;
    ziele: {
      data: Pillar[];
    };
    partnerBild: Picture;
  };
}

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

export interface Footer {
  attributes: {
    statement: string;
    anschrift: string;
    copyright: string;
  };
}

export interface Logo {
  attributes: {
    bild: Picture;
    link: string;
    titel: string;
    beschreibung: string;
  };
}

export interface Picture {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface Pillar {
  attributes: {
    titel: string;
    textKurz: string;
    textLang?: string;
    bild: Picture;
    bild2?: Picture;
  };
  index: number;
}

export interface Product {
  attributes: {
    bild: Picture;
    hoverBild: Picture;
    link: string;
    titel: string;
    untertitel: string;
    preis: number;
    istNeu: boolean;
    siegel: Picture;
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
