import styled from 'styled-components';
import { boxShadow, borderRadius } from './mixins';
import theme from './global_theme';

const Block = styled.div`
	display: block;
	position: relative;
	float: left;
	width: 100%;
	margin: 3px auto 2px;
	padding: 18px 6px 9px;
	background: #fff;
	${borderRadius(theme.border_radius)}
	/* ${boxShadow(theme.row_shadow)} */
	border: 1px solid #dee0e4;
`;

export default Block;
