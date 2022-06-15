import React from "react";
import Video from "../../src/videos/videotickets.mp4";
import "../components/TicketsElements.css";
import { BtnTo, HeroBg, VideoBg } from "../components/TicketsElements";

const Tickets = () => {
  return (
    <>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <div class="form-container">
        <form class="register-form">
          <select>
            <option selected>Choose Ticket Type</option>
            <option>1 Day Acces [75€]</option>
            <option>Full Festival Pass [200€]</option>
            <option>Premium Festival Pass[280€]</option>
          </select>

          <input
            id="noOfTickets"
            class="form-field"
            type="text"
            placeholder="Number of tickets"
            name="number"
          />

          <input
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />

          <BtnTo to="/payment">Go to payment [Card Only]</BtnTo>
        </form>
      </div>
    </>
  );
};

export default Tickets;
