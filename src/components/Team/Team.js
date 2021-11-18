import { Link } from 'react-router-dom';
import teams from './dataTeam';
import s from './Team.module.css';

export default function OurTeam() {
  return (
    <div className={s.content}>
      <Link to="/" alt="homepage" className={s.close} />

      {teams.map((team, idx) => (
        <figure key={idx} className={s.team}>
          <img src={team.photo} alt="" className={s.background} />
          <img src={team.photo} alt={team.fullName} className={s.profile} />
          <figcaption>
            <h3>
              {team.fullName}
              <span>{team.position}</span>
            </h3>
            <div className={s.icons}>
              <a href={team.linkedIn} target="_blank" rel="noreferrer">
                <i className="ion-social-linkedin-outline"></i>
              </a>
              <a href={team.gitHub} target="_blank" rel="noreferrer">
                <i className="ion-social-github-outline"></i>
              </a>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
