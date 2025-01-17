export type RequirementType =
  | 'Requirement'
  | 'Functional Requirement'
  | 'Interface Requirement'
  | 'Performance Requirement'
  | 'Physical Requirement'
  | 'Design Constraint';

export type RiskLevel = 'Low' | 'Medium' | 'High';

export type VerifyType = 'Analysis' | 'Demonstration' | 'Inspection' | 'Test';

export interface Requirement {
  name: string;
  type: RequirementType;
  id: string;
  text: string;
  risk: RiskLevel;
  verifyMethod: VerifyType;
}

export type RelationshipType =
  | 'contains'
  | 'copies'
  | 'derives'
  | 'satisfies'
  | 'verifies'
  | 'refines'
  | 'traces';

export interface Relation {
  type: RelationshipType;
  src: string;
  dst: string;
}

export interface Element {
  name: string;
  type: string;
  docRef: string;
}
