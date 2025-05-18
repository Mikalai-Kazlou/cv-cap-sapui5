namespace sap.exercise.cv;

entity SkillGroups {
  key ID     : Integer;
      title  : localized String(100);
      skills : Composition of many Skills
                 on skills.group = $self;
}

entity Skills {
  key ID    : Integer;
      group : Association to SkillGroups;
      title : localized String(100);
      level : Integer;
}

entity WorkExperiences {
  key ID               : Integer;
      workStart        : Date;
      workFinish       : Date;
      company          : localized String(100);
      companyLink      : String(100);
      customer         : localized String(100);
      projectRoles     : Composition of many WorkExperiencesToProjectRoles
                           on projectRoles.parent = $self;
      responsibilities : Composition of many Responsibilities
                           on responsibilities.parent = $self;
      technologies     : Composition of many WorkExperiencesToTechnologies
                           on technologies.parent = $self;
}

entity WorkExperiencesToProjectRoles {
  key parent : Association to WorkExperiences;
  key child  : Association to ProjectRoles;
}

entity WorkExperiencesToTechnologies {
  key parent : Association to WorkExperiences;
  key child  : Association to Technologies;
}

entity ProjectRoles {
  key ID    : Integer;
      title : localized String(60);
}

entity Responsibilities {
  key ID     : Integer;
      parent : Association to WorkExperiences;
      title  : localized String(255);
}

entity Technologies {
  key ID    : Integer;
      title : localized String(100);
}
