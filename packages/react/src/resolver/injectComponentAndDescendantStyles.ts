import { GluestackStyleSheet } from '../style-sheet';
import type { OrderedSXResolved } from '../types';
import {
  getComponentResolvedBaseStyle,
  getComponentResolvedVariantStyle,
  getDescendantResolvedBaseStyle,
  getDescendantResolvedVariantStyle,
} from './getComponentStyle';

export function injectComponentAndDescendantStyles(
  orderedResolved: OrderedSXResolved,
  styleTagId?: string,
  type: 'boot' | 'inline' = 'boot'
) {
  const [
    componentOrderResolvedBaseStyle,
    componentOrderResolvedBaseStateStyle,
  ] = getComponentResolvedBaseStyle(orderedResolved);
  const [
    componentOrderResolvedVariantStyle,
    componentOrderResolvedVariantStateStyle,
  ] = getComponentResolvedVariantStyle(orderedResolved);

  const [
    descendantOrderResolvedBaseStyle,
    descendantOrderResolvedBaseStateStyle,
  ] = getDescendantResolvedBaseStyle(orderedResolved);
  const [
    descendantOrderResolvedVariantStyle,
    descendantOrderResolvedVariantStateStyle,
  ] = getDescendantResolvedVariantStyle(orderedResolved);

  const componentOrderResolvedBaseStyleIds = GluestackStyleSheet.declare(
    [
      ...componentOrderResolvedBaseStyle,
      ...componentOrderResolvedBaseStateStyle,
    ],
    type + '-base',
    styleTagId ? styleTagId : 'css-injected-boot-time',
    false
  );
  const descendantOrderResolvedBaseStyleIds = GluestackStyleSheet.declare(
    [
      ...descendantOrderResolvedBaseStyle,
      ...descendantOrderResolvedBaseStateStyle,
    ],
    type + '-descendant-base',
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant',
    {}
  );
  const componentOrderResolvedVariantStyleIds = GluestackStyleSheet.declare(
    [
      ...componentOrderResolvedVariantStyle,
      ...componentOrderResolvedVariantStateStyle,
    ],
    type + '-variant',
    styleTagId ? styleTagId : 'css-injected-boot-time',
    {}
  );
  const descendantOrderResolvedVariantStyleIds = GluestackStyleSheet.declare(
    [
      ...descendantOrderResolvedVariantStyle,
      ...descendantOrderResolvedVariantStateStyle,
    ],
    type + '-descendant-variant',
    styleTagId ? styleTagId : 'css-injected-boot-time-descendant',
    {}
  );

  const styleCSSIdsArr = [
    ...componentOrderResolvedBaseStyleIds,
    ...descendantOrderResolvedBaseStyleIds,
    ...componentOrderResolvedVariantStyleIds,
    ...descendantOrderResolvedVariantStyleIds,
  ];

  const toBeInjected = GluestackStyleSheet.resolve(
    styleCSSIdsArr,
    {},
    {},
    false
  );
  GluestackStyleSheet.inject(toBeInjected);
}
