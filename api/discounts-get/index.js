const data = require('../shared/discount-data');

/**
 * Retrieves discounts and sends them as a JSON response.
 * @param {Object} context - The Azure Function context object.
 * @param {Object} req - The HTTP request object.
 */
module.exports = async function (context, req) {
    try {
        const discounts = data.getDiscounts();
        context.res.status(200).json(discounts);
    } catch (error) {
        context.res.status(500).send(error);
    }
};
