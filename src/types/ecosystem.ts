export type EcosystemRelationId =
  | "people"
  | "community"
  | "technologies"
  | "ai"
  | "infrastructure"
  | "practice"
  | "platform"
  | "market";

export type EcosystemAsset = {
  src: string;
  alt: string;
  kind: "logo" | "portrait";
};

export type EcosystemRelation = {
  id: EcosystemRelationId;
  index: string;
  label: string;
  verb: string;
  description: string;
  assets: readonly EcosystemAsset[];
  markers?: readonly string[];
};
