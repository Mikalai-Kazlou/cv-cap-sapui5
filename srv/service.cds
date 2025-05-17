using {sap.exercise.cv as db} from '../db/schema';

service CVService {
  entity SkillGroups as projection on db.SkillGroups;
  entity Skills      as projection on db.Skills;
}
