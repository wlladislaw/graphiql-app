import { IFooterLogos } from '../../../types';
import './FooterLogos.scss';

export function FooterLogos({ logos, altClass }: IFooterLogos) {
  return (
    <div className={`logos ${altClass}`}>
      {logos?.map((user) => (
        <a
          className="logos__item"
          href={user.link}
          title={user.name}
          key={user.id}
        >
          <img src={user.img} title={user.name} alt={user.name} />
        </a>
      ))}
    </div>
  );
}
