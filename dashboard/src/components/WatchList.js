import React, { useContext, useState } from "react";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";

const WatchList = () => {
  const [searchText, setSearchText] = useState("");

  const filteredStocks = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="watchlist-container">

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />

        <span className="counts">
          {watchlist.length} / 50
        </span>
      </div>

      {/* Stock List */}
      <ul className="list">
        {filteredStocks.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}

        {filteredStocks.length === 0 && (
          <li
            style={{
              justifyContent: "center",
              color: "#999",
              fontSize: "13px",
            }}
          >
            No instruments found
          </li>
        )}
      </ul>

      {/* Bottom Watchlist Tabs */}
      <div className="watchlist-number">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  );
};

export default WatchList;


/* =========================
   WATCHLIST ITEM
========================= */

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item">

        {/* Stock Name */}
        <div className="item-info">
          <span>{stock.name}</span>

          {/* Percentage */}
          <span className={stock.isDown ? "down" : "up"}>
            {stock.percent}
          </span>

          {/* Arrow */}
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          {/* Price */}
          <span className={stock.isDown ? "down" : "up"}>
            {stock.price}
          </span>
        </div>

      </div>

      {/* Hover Actions */}
      {showWatchlistActions && (
        <WatchListActions uid={stock.name} />
      )}
    </li>
  );
};


/* =========================
   ACTION BUTTONS
========================= */

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">

      <span>

        {/* BUY */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onClick={handleBuyClick}
          >
            Buy
          </button>
        </Tooltip>

        {/* SELL */}
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">
            Sell
          </button>
        </Tooltip>

        {/* ANALYTICS */}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        {/* MORE */}
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>

      </span>

    </span>
  );
};