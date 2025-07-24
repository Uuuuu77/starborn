
import { Shield, Zap, Badge } from 'lucide-react';
import HierarchySection from '@/components/HierarchySection';

const HierarchyTab = (): JSX.Element => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <HierarchySection
        title="The Guardian Order"
        icon={<Shield className="w-6 h-6 text-stellar-400" />}
        description="Philosopher-warriors dedicated to protecting constitutional harmony"
        ranks={[
          "Grand Master of Harmony – Supreme head, custodian of doctrine and ethics",
          "Masters of the Order – Lead regional Temples and train senior Guardians",
          "Knight Protectors – Full members sworn to the Oath of Harmony",
          "Sentinels – Mid-level Guardians specializing in intelligence, diplomacy, or protection",
          "Inquisitive Apprentices – Trainees learning philosophy, ethics, and foundational defense",
          "Novitiates – Initiates undergoing evaluation for formal apprenticeship"
        ]}
      />

      <HierarchySection
        title="Imperial Military Command"
        icon={<Zap className="w-6 h-6 text-cosmic-400" />}
        description="Defenders of the Dominion across all worlds and star systems"
        ranks={[
          "Supreme Commander of Forces – Answers directly to the Emperor",
          "Fleet Admirals / Field Marshals – Command entire starfleets or planetary defense theaters",
          "Fleet Captains / General Officers – Lead individual capital ships or army corps",
          "Lieutenant Commanders / Senior Officers – Tactical leaders of squadrons, brigades, or regiments",
          "Lieutenants / Junior Officers – Unit-level command (platoons, starfighter wings)",
          "Enlisted Guardians / Soldiers – Front-line forces: Pilots, Ship Crews, Marine Corps, Armored Divisions, Support Corps"
        ]}
      />

      <HierarchySection
        title="Imperial Rangers & Police Forces"
        icon={<Badge className="w-6 h-6 text-stellar-400" />}
        description="Keepers of peace and order across frontier and urban territories"
        ranks={[
          "Commissioner of Peace – Head of all civil enforcement agencies",
          "Chief Ranger / Chief Inspector – Regional leads for Rangers (frontier) or Police (urban)",
          "Ranger Captains / Police Commanders – Oversee companies or precincts",
          "Ranger Lieutenants / Detective Sergeants – Lead patrols, investigations, and specialized units",
          "Rangers / Patrol Officers – Frontier law enforcement, environmental protection",
          "Constables / Junior Patrols – Entry-level civic security, community engagement",
          "Civic Marshals – Trained negotiators and emergency response liaisons"
        ]}
      />
    </div>
  );
};

export default HierarchyTab;
