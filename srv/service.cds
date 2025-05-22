using {sap.exercise.cv as db} from '../db/schema';

service CVService {
  entity SkillGroups                   as projection on db.SkillGroups;
  entity Skills                        as projection on db.Skills;
  entity WorkExperiences               as projection on db.WorkExperiences;
  entity WorkExperiencesToProjectRoles as projection on db.WorkExperiencesToProjectRoles;
  entity WorkExperiencesToTechnologies as projection on db.WorkExperiencesToTechnologies;
  entity Companies                     as projection on db.Companies;
  entity ProjectRoles                  as projection on db.ProjectRoles;
  entity Responsibilities              as projection on db.Responsibilities;
  entity Technologies                  as projection on db.Technologies;
}
