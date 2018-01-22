import React from "react";

function EventTitle({ content, date }) {
  return [<p key="date">{date}</p>, <p key="content">{content}</p>];
}

const formatDate = range => range.start.format("MMM DD");

export default ({ range, ...event }) => ({
  range,
  content: <EventTitle {...event} date={formatDate(range)} />
});
