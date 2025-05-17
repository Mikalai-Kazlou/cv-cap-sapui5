using {managed} from '@sap/cds/common';

namespace sap.exercise.cv;

entity SkillGroups : managed {
  key ID     : Integer;
      title  : localized String(100);
      skills : Association to many Skills
                 on skills.group = $self;
}

entity Skills : managed {
  key ID    : Integer;
      group : Association to SkillGroups;
      title : localized String(100);
      level : Integer;
}
