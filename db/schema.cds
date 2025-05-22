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
      company          : Association to Companies;
      customer         : localized String(100);
      projectRoles     : Composition of many WorkExperiencesToProjectRoles
                           on projectRoles.parent = $self;
      responsibilities : Composition of many Responsibilities
                           on responsibilities.parent = $self;
      technologies     : Composition of many WorkExperiencesToTechnologies
                           on technologies.parent = $self;
}

entity Companies {
  key ID    : Integer;
      title : localized String(100);
      link  : String(100);
}

entity WorkExperiencesToProjectRoles {
  key parent : Association to WorkExperiences;
  key child  : Association to ProjectRoles;
      order  : Integer;
}

entity WorkExperiencesToTechnologies {
  key parent : Association to WorkExperiences;
  key child  : Association to Technologies;
      order  : Integer;
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
