import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model";

const intiitalState: Array<ShoppingItem> = [
    {
        id: '1231934-140314-1ws',
        name: 'Diet Coke',
    }
];

export function ShoppingReducer(state: Array<ShoppingItem> = intiitalState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}