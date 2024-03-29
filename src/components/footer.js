import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col col-lg-6">
          <span className="follow">Follow Us </span>
          <a href="https://www.instagram.com/basten_ahamad/">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
          <a href="https://discord.gg/rFQKgJMx">
            <i className="fa-brands fa-discord fa-xl"></i>
          </a>
          <a href="https://github.com/bastenahamad">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
        </div>
        <div className="col col-lg-6">
          <div className="row">
            <div className="col col-lg-6">
            <Link  to="/" className="mal">
              Home
            </Link>
            </div>
            <div className="col col-lg-6">
              <a href="https://myanimelist.net/" className="mal">
                MyAnimeList.net
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">My-Anime-Ichiran, ©2023 Basten</div>
    </div>
  );
}