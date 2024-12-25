const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AXr5acvHzA3XvKa2vOywXYi1W0VtHzoWnl1pcikeKOPcDM6yv8_bxb0_sncInXNzb4B6w65piNov088C",
  client_secret: "EErxKJjFkX_cNLQpE2pYlrxA-o0ylDI4Z2IYEulv3C5zZ61CM22hoHc5omekDHY_BHPmeHbrD42o6G5G",
});

module.exports = paypal;
