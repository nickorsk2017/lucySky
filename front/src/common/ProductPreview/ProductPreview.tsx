import {Horizontal, Vertical} from "./_components";

export enum PRODUCT_PREVIEW_TYPES {
  HORIZONTAL,
  VERTICAL,
};

export type Props = {
  type: PRODUCT_PREVIEW_TYPES;
  isEmpty?: boolean;
  product: Entity.Product;
  size?: Entity.ProductSizes;
  onDelete?: () => void;
};

const ProductPreview: React.FC<Props> = ({type, isEmpty, size, onDelete, ...props}) => {

  switch (type) {
    case PRODUCT_PREVIEW_TYPES.HORIZONTAL:
      return <Horizontal onDelete={onDelete} size={size} {...props} />;
    case PRODUCT_PREVIEW_TYPES.VERTICAL:
    default:
      return <Vertical isEmpty={isEmpty} {...props} />;
  }
} 

export default ProductPreview;
