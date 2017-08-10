import { serialize, observe, serializeModel, Model } from 'utils';

class SceneItem extends Model {

/// Sort

    /** Item sort index */
    @observe @serialize sortIndex:number = 0;

/// Lock

    /** Item locked state */
    @observe @serialize locked:boolean = false;

/// Properties

    /** Item name (identifier) */
    @observe @serialize name:string;

    /** Item entity class */
    @observe @serialize entity:string;

/// Helpers

    serializeForCeramic() {

        let serialized = serializeModel(this, { exclude: ['_model', 'id'] });
        let data:any = { props: {}, data: {} };

        for (let key in serialized) {
            if (serialized.hasOwnProperty(key)) {
                if (key === 'locked') {
                    data.data[key] = serialized[key];
                } else if (key === 'name' || key === 'entity' || key === 'sortIndex') {
                    data[key] = serialized[key];
                } else {
                    data.props[key] = serialized[key];
                }
            }
        }

        return data;

    } //serializeForCeramic

} //SceneItem

export default SceneItem;
