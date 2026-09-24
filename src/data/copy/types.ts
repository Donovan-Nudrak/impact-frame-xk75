import type { ArchitectureLayerId } from "../architecture";
import type { MaterialId } from "../materials";
import type { ConnectionModeId } from "../performance";
import type { SpecGroupId, SpecItemId } from "../specifications";
import type { SwitchPartId } from "../switches";

export type Locale = "es" | "en";

export type HeroFeatureId = "form" | "material" | "hotswap" | "connectivity";

export type HeroFeatureCopy = {
  code: string;
  label: string;
};

export type AppCopy = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    mark: string;
    product: string;
    tagline: string;
    taglineAccents: readonly string[];
  };
  language: {
    label: string;
    es: string;
    en: string;
  };
  hero: {
    imageAlt: string;
    cta: string;
    features: Record<HeroFeatureId, HeroFeatureCopy>;
  };
  manifesto: {
    headline: string;
    body: string;
    imageAlt: string;
  };
  architecture: {
    title: string;
    intro: string;
    imageAlt: string;
    layers: Record<ArchitectureLayerId, { name: string; description: string }>;
  };
  switchSystem: {
    title: string;
    intro: string;
    press: string;
    hint: string;
    parts: Record<SwitchPartId, { name: string; description: string }>;
  };
  materials: {
    title: string;
    intro: string;
    items: Record<
      MaterialId,
      {
        name: string;
        description: string;
        imageAlt?: string;
      }
    >;
  };
  performance: {
    title: string;
    intro: string;
    modeLabel: string;
    keyboardAlt: string;
    hostLabel: string;
    hostAlt: string;
    modes: Record<ConnectionModeId, { name: string; description: string }>;
  };
  specifications: {
    title: string;
    imageAlt: string;
    planAlt: string;
    groups: Record<SpecGroupId, { title: string }>;
    items: Record<SpecItemId, { label: string; value: string }>;
  };
  reserve: {
    title: string;
    intro: string;
    notice: string;
    nameLabel: string;
    emailLabel: string;
    submit: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    resultTitle: string;
    resultMessage: string;
    continue: string;
  };
  finalStatement: {
    tagline: string;
    imageAlt: string;
    ctaPrimary: string;
  };
  nav: {
    label: string;
    manifesto: string;
    architecture: string;
    switches: string;
    materials: string;
    performance: string;
    specs: string;
    reserve: string;
    final: string;
    menu: string;
    closeMenu: string;
  };
  footer: {
    tagline: string;
    navLabel: string;
    notice: string;
    year: string;
    rights: string;
    author: string;
    linksLabel: string;
    links: {
      linkedin: string;
      github: string;
      portfolio: string;
    };
  };
  legal: {
    notice: string;
  };
};
