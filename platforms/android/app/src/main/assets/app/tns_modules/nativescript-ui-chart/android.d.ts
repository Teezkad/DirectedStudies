
import androidgraphicsPoint = android.graphics.Point;
import androidgraphicsCanvas = android.graphics.Canvas;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.containers.PointerLayout.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module tooltip {
						export class RadTooltipView extends com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase {
							public getPointerSize(): number;
							public constructor(param0: androidcontentContext, param1: com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter);
							public setPointerSize(param0: number): void;
							public constructor(param0: androidcontentContext, param1: com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter, param2: number);
							public notifyDraw(param0: androidgraphicsCanvas): void;
							public pointerLayout(): com.telerik.android.primitives.widget.tooltip.containers.PointerLayout;
							public open(param0: androidgraphicsPoint): void;
						}
					}
				}
			}
		}
	}
}

import androidutilAttributeSet = android.util.AttributeSet;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module tooltip {
						export module containers {
							export class PointerLayout {
								public setTooltipMargin(param0: number): void;
								public updateContainerLocation(param0: androidgraphicsPoint): void;
								public setPadding(param0: number, param1: number, param2: number, param3: number): void;
								public getPointerColor(): number;
								public onDraw(param0: androidgraphicsCanvas): void;
								public updateTargetLocation(param0: androidgraphicsPoint): void;
								public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
								public getAlignPointerVertically(): boolean;
								public setPointerSize(param0: number): void;
								public setPointerColor(param0: number): void;
								public getTooltipMargin(): number;
								public setAlignPointerVertically(param0: boolean): void;
								public getPointerSize(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module tooltip {
						export module contracts {
							export class DrawListener {
								/**
								 * Constructs a new instance of the com.telerik.android.primitives.widget.tooltip.contracts.DrawListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									notifyDraw(param0: androidgraphicsCanvas): void;
								});
								public notifyDraw(param0: androidgraphicsCanvas): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module tooltip {
						export module contracts {
							export class TooltipAdapter {
								/**
								 * Constructs a new instance of the com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter interface with the provided implementation.
								 */
								public constructor(implementation: {
									rawOffset(): androidgraphicsPoint;
									availableLayoutSlot(): androidgraphicsRectF;
									alignTooltipVertically(): boolean;
									getTooltipData(param0: javalangObject): native.Array<javalangObject>;
									getPlotAreaClip(): com.telerik.android.common.math.RadRect;
									contentAdapter(): com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter;
									setContentAdapter(param0: com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter): void;
								});
								public rawOffset(): androidgraphicsPoint;
								public contentAdapter(): com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter;
								public setContentAdapter(param0: com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter): void;
								public getTooltipData(param0: javalangObject): native.Array<javalangObject>;
								public alignTooltipVertically(): boolean;
								public availableLayoutSlot(): androidgraphicsRectF;
								public getPlotAreaClip(): com.telerik.android.common.math.RadRect;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module tooltip {
						export module contracts {
							export class TooltipContentAdapter {
								/**
								 * Constructs a new instance of the com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter interface with the provided implementation.
								 */
								public constructor(implementation: {
									getView(param0: native.Array<javalangObject>): androidviewView;
									getIsApplyDefaultStyles(): boolean;
									setApplyDefaultStyles(param0: boolean): void;
									getValueToStringConverter(): com.telerik.android.common.Function;
									setValueToStringConverter(param0: com.telerik.android.common.Function): void;
									getCategoryToStringConverter(): com.telerik.android.common.Function;
									setCategoryToStringConverter(param0: com.telerik.android.common.Function): void;
								});
								public getCategoryToStringConverter(): com.telerik.android.common.Function;
								public setApplyDefaultStyles(param0: boolean): void;
								public getView(param0: native.Array<javalangObject>): androidviewView;
								public setCategoryToStringConverter(param0: com.telerik.android.common.Function): void;
								public getIsApplyDefaultStyles(): boolean;
								public getValueToStringConverter(): com.telerik.android.common.Function;
								public setValueToStringConverter(param0: com.telerik.android.common.Function): void;
							}
						}
					}
				}
			}
		}
	}
}

import androidviewViewGroup = android.view.ViewGroup;
import androidwidgetPopupWindow = android.widget.PopupWindow;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.PopupWindow.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module tooltip {
						export module views {
							export abstract class TooltipPresenterBase {
								public tooltipContentContainer: androidviewViewGroup;
								public targetContentContainer: androidviewViewGroup;
								public popupWindow: androidwidgetPopupWindow;
								public tooltipAdapter: com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter;
								public targetPoint: androidgraphicsPoint;
								public tooltipBounds: androidgraphicsRectF;
								public updateTooltipContent(param0: javalangObject): boolean;
								public constructor(param0: androidcontentContext, param1: com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter, param2: number);
								public setTouchable(param0: boolean): void;
								public setContentAdapter(param0: com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter): void;
								public isOpen(): boolean;
								public calculateTooltipBounds(param0: androidgraphicsPoint): androidgraphicsRectF;
								public notifyDraw(param0: androidgraphicsCanvas): void;
								public onDraw(param0: androidgraphicsCanvas): void;
								public close(): boolean;
								public open(param0: androidgraphicsPoint): void;
								public getIsTouchable(): boolean;
								public shouldPreventPointOverlap(): boolean;
								public onDrawCore(param0: androidgraphicsCanvas): void;
								public getTooltipAnimationStyle(): number;
								public openCore(param0: androidgraphicsPoint): void;
								public getContentAdapter(): com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter;
								public setTooltipAnimationStyle(param0: number): void;
								public adjustPosition(param0: androidgraphicsRectF, param1: androidgraphicsPoint): androidgraphicsRectF;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class AxisLabelLayoutMode {
							public static OUTER: com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode;
							public static INNER: com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode;
							public static values(): native.Array<com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode>;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.LabelSizeInfo.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class AxisLabelModel extends com.telerik.widget.chart.engine.elementTree.ContentNode {
							public constructor();
							public update(param0: com.telerik.widget.chart.visualization.common.LabelSizeInfo): void;
							public getLabelSizeInfo(): com.telerik.widget.chart.visualization.common.LabelSizeInfo;
							public normalizedPosition(): number;
							public untransformedDesiredSize(): com.telerik.android.common.math.RadSize;
							public constructor(param0: number, param1: com.telerik.android.common.math.RadPoint, param2: com.telerik.android.common.math.RadSize);
							public transformOffset(): com.telerik.android.common.math.RadPoint;
						}
					}
				}
			}
		}
	}
}

import javalangIterable = java.lang.Iterable;
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.RadThickness.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisTickModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisTitleModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisUpdateContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.layout.AxisModelLayoutStrategy.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ElementCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export abstract class AxisModel extends com.telerik.widget.chart.engine.elementTree.ChartElement {
							public static PLOT_ORIGIN_PROPERTY_KEY: number;
							public static PLOT_DIRECTION_PROPERTY_KEY: number;
							public resetState(): void;
							public buildTicksAndLabels(param0: com.telerik.android.common.math.RadSize): boolean;
							public setLabelFormat(param0: string): void;
							public getShowLabels(): boolean;
							public setVerticalLocation(param0: com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation): void;
							public getNormalizedLabelRotationAngle(): number;
							public getLabelFormat(): string;
							public setShowLabels(param0: boolean): void;
							public getMajorTicks(): javalangIterable<javalangObject>;
							public setMajorTickLength(param0: number): void;
							public generateLastLabel(): com.telerik.widget.chart.engine.axes.AxisLabelModel;
							public getLabelInterval(): number;
							public update(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
							public getLabelContentCore(param0: com.telerik.widget.chart.engine.axes.AxisTickModel): javalangObject;
							public getVerticalLocation(): com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation;
							public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public applyLayoutRounding(): void;
							public setLabelInterval(param0: number): void;
							public getCombineGroupKey(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): javalangObject;
							public measure(param0: com.telerik.android.common.math.RadSize): boolean;
							public getLastTick(): com.telerik.widget.chart.engine.axes.AxisTickModel;
							public plot(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
							public getLabelLayoutMode(): com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode;
							public setIsPrimary(param0: boolean): void;
							public majorTickCount(): number;
							public updateCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
							public getHorizontalLocation(): com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation;
							public getMajorTickOffset(): number;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public getIsPrimary(): boolean;
							public title(): com.telerik.widget.chart.engine.axes.AxisTitleModel;
							public createLayoutStrategy(): com.telerik.widget.chart.engine.axes.common.layout.AxisModelLayoutStrategy;
							public getMajorTickLength(): number;
							public isUpdated(): boolean;
							public setWidth(param0: number): void;
							public ticks(): com.telerik.widget.chart.engine.elementTree.ElementCollection;
							public getWidth(): number;
							public onPanOffsetChanged(): void;
							public setLabelOffset(param0: number): void;
							public updateTicksVisibility(param0: com.telerik.android.common.math.RadRect): void;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public getDesiredSize(): com.telerik.android.common.math.RadSize;
							public createPlotInfo(param0: javalangObject): com.telerik.widget.chart.engine.axes.common.AxisPlotInfo;
							public getLayoutStrategy(): com.telerik.widget.chart.engine.axes.common.layout.AxisModelLayoutStrategy;
							public setNormalizedLabelRotationAngle(param0: number): void;
							public onZoomChanged(): void;
							public setTickThickness(param0: number): void;
							public setLineThickness(param0: number): void;
							public convertPhysicalUnitsToData(param0: number): javalangObject;
							public getStackValue(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): com.telerik.widget.chart.engine.axes.AxisModel.StackValue;
							public getLabelContent(param0: com.telerik.widget.chart.engine.axes.AxisTickModel): javalangObject;
							public getLastLabelVisibility(): com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
							public setLastLabelVisibility(param0: com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility): void;
							public plotCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
							public setLabelMargin(param0: number): void;
							public getType(): com.telerik.widget.chart.engine.axes.AxisType;
							public setType(param0: com.telerik.widget.chart.engine.axes.AxisType): void;
							public constructor();
							public getLabelOffset(): number;
							public setHorizontalLocation(param0: com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation): void;
							public getActualPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
							public getLabelFitMode(): com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode;
							public getLabelMargin(): number;
							public generateTicks(param0: com.telerik.widget.chart.engine.axes.continuous.ValueRange): javalangIterable<javalangObject>;
							public getFirstTick(): com.telerik.widget.chart.engine.axes.AxisTickModel;
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public getLabelValueToStringConverter(): com.telerik.android.common.Function;
							public desiredMargin(): com.telerik.android.common.RadThickness;
							public getLineThickness(): number;
							public getTickThickness(): number;
							public generateLabels(): javalangIterable<javalangObject>;
							public isPlotValid(): boolean;
							public getLabels(): com.telerik.widget.chart.engine.elementTree.ElementCollection;
							public setMajorTickOffset(param0: number): void;
							public setLabelLayoutMode(param0: com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode): void;
							public setLabelFitMode(param0: com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode): void;
							public isDataReady(): boolean;
						}
						export module AxisModel {
							export class StackValue {
								public value: number;
								public positive: boolean;
								public constructor(param0: com.telerik.widget.chart.engine.axes.AxisModel);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.TickPosition.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.TickType.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export abstract class AxisTickModel extends com.telerik.widget.chart.engine.elementTree.ChartNode {
							public next: com.telerik.widget.chart.engine.axes.AxisTickModel;
							public previous: com.telerik.widget.chart.engine.axes.AxisTickModel;
							public constructor();
							public constructor(param0: number, param1: number, param2: number);
							public virtualIndex(): number;
							public associatedLabel(): com.telerik.widget.chart.engine.axes.AxisLabelModel;
							public getType(): com.telerik.widget.chart.engine.axes.TickType;
							public position(): com.telerik.widget.chart.engine.axes.TickPosition;
							public getNormalizedForwardLength(): number;
							public normalizedValue(): number;
							public getNextMajorTick(): com.telerik.widget.chart.engine.axes.AxisTickModel;
							public getNormalizedBackwardLength(): number;
							public value(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class AxisTitleModel extends com.telerik.widget.chart.engine.elementTree.ContentNode {
							public constructor();
							public unloadCore(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class AxisType {
							public static FIRST: com.telerik.widget.chart.engine.axes.AxisType;
							public static SECOND: com.telerik.widget.chart.engine.axes.AxisType;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.AxisType;
							public static values(): native.Array<com.telerik.widget.chart.engine.axes.AxisType>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class AxisUpdateContext {
							public isStacked(): boolean;
							public constructor(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: javautilArrayList<javalangObject>, param2: javalangIterable<javalangObject>);
							public isStacked100(): boolean;
							public combinedSeries(): javalangIterable<javalangObject>;
							public nonCombinedSeries(): javalangIterable<javalangObject>;
							public series(): javalangIterable<javalangObject>;
							public maximumStackSum(): number;
							public getMinimumStackSum(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.TickType.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class MajorTickModel extends com.telerik.widget.chart.engine.axes.AxisTickModel {
							public constructor();
							public constructor(param0: number, param1: number, param2: number);
							public getType(): com.telerik.widget.chart.engine.axes.TickType;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.TickType.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class MinorTickModel extends com.telerik.widget.chart.engine.axes.AxisTickModel {
							public constructor();
							public constructor(param0: number, param1: number, param2: number);
							public getType(): com.telerik.widget.chart.engine.axes.TickType;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class TickPosition {
							public static FIRST: com.telerik.widget.chart.engine.axes.TickPosition;
							public static INNER: com.telerik.widget.chart.engine.axes.TickPosition;
							public static LAST: com.telerik.widget.chart.engine.axes.TickPosition;
							public static values(): native.Array<com.telerik.widget.chart.engine.axes.TickPosition>;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.TickPosition;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export class TickType {
							public static MAJOR: com.telerik.widget.chart.engine.axes.TickType;
							public static MINOR: com.telerik.widget.chart.engine.axes.TickType;
							public static values(): native.Array<com.telerik.widget.chart.engine.axes.TickType>;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.TickType;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module categorical {
							export class AxisCategory {
								public key: javalangObject;
								public keySource: javalangObject;
								public points: javautilArrayList<javalangObject>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module categorical {
							export class AxisSupportsCombinedSeriesPlot {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.engine.axes.categorical.AxisSupportsCombinedSeriesPlot interface with the provided implementation.
								 */
								public constructor(implementation: {
								});
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisTickModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisUpdateContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module categorical {
							export class CategoricalAxisModel extends com.telerik.widget.chart.engine.axes.AxisModel implements com.telerik.widget.chart.engine.axes.categorical.AxisSupportsCombinedSeriesPlot {
								public categories: javautilArrayList<javalangObject>;
								public getPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public getMajorTickInterval(): number;
								public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
								public createPlotInfo(param0: javalangObject): com.telerik.widget.chart.engine.axes.common.AxisPlotInfo;
								public constructor();
								public setMajorTickInterval(param0: number): void;
								public updateCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
								public generateLastLabel(): com.telerik.widget.chart.engine.axes.AxisLabelModel;
								public setPlotMode(param0: com.telerik.widget.chart.engine.axes.common.AxisPlotMode): void;
								public getGapLength(): number;
								public convertPhysicalUnitsToData(param0: number): javalangObject;
								public majorTickCount(): number;
								public getLabelContentCore(param0: com.telerik.widget.chart.engine.axes.AxisTickModel): javalangObject;
								public generateTicks(param0: com.telerik.widget.chart.engine.axes.continuous.ValueRange): javalangIterable<javalangObject>;
								public calculateRelativeStep(param0: number): number;
								public plotCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
								public getActualPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public getCombineGroupKey(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): javalangObject;
								public setGapLength(param0: number): void;
								public isDataReady(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module categorical {
							export class CategoricalAxisPlotInfo extends com.telerik.widget.chart.engine.axes.common.AxisPlotInfo {
								public position: number;
								public length: number;
								public rangeLength: number;
								public rangePosition: number;
								public categoryKey: javalangObject;
								public centerX(param0: com.telerik.android.common.math.RadRect): number;
								public centerY(param0: com.telerik.android.common.math.RadRect): number;
								public static create(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: number, param2: number): com.telerik.widget.chart.engine.axes.categorical.CategoricalAxisPlotInfo;
							}
						}
					}
				}
			}
		}
	}
}

import javatextDateFormat = java.text.DateFormat;
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisTickModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisUpdateContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.categorical.AxisCategory.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.DateTimeComponent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module categorical {
							export class DateTimeCategoricalAxisModel extends com.telerik.widget.chart.engine.axes.categorical.CategoricalAxisModel {
								public static defaultDateFormat: javatextDateFormat;
								public getDateTimeComponent(): com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public getLabelContentCore(param0: com.telerik.widget.chart.engine.axes.AxisTickModel): javalangObject;
								public setDateFormat(param0: javatextDateFormat): void;
								public setDateTimeComponent(param0: com.telerik.widget.chart.engine.axes.common.DateTimeComponent): void;
								public compare(param0: com.telerik.widget.chart.engine.axes.categorical.AxisCategory, param1: com.telerik.widget.chart.engine.axes.categorical.AxisCategory): number;
								public constructor();
								public getDateFormat(): javatextDateFormat;
								public updateCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class AxisHorizontalLocation {
								public static LEFT: com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation;
								public static RIGHT: com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation;
								public static values(): native.Array<com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class AxisLabelFitMode {
								public static NONE: com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode;
								public static MULTI_LINE: com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode;
								public static ROTATE: com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode;
								public static values(): native.Array<com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class AxisLastLabelVisibility {
								public static VISIBLE: com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
								public static HIDDEN: com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
								public static CLIP: com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
								public static values(): native.Array<com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class AxisPlotDirection {
								public static VERTICAL: com.telerik.widget.chart.engine.axes.common.AxisPlotDirection;
								public static HORIZONTAL: com.telerik.widget.chart.engine.axes.common.AxisPlotDirection;
								public static values(): native.Array<com.telerik.widget.chart.engine.axes.common.AxisPlotDirection>;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.common.AxisPlotDirection;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export abstract class AxisPlotInfo {
								public axis: com.telerik.widget.chart.engine.axes.AxisModel;
								public centerX(param0: com.telerik.android.common.math.RadRect): number;
								public getAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public centerY(param0: com.telerik.android.common.math.RadRect): number;
								public constructor();
								public getSnapTickIndex(): number;
								public setSnapTickIndex(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class AxisPlotMode {
								public static BETWEEN_TICKS: com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public static ON_TICKS: com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public static ON_TICKS_PADDED: com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public static values(): native.Array<com.telerik.widget.chart.engine.axes.common.AxisPlotMode>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class AxisVerticalLocation {
								public static BOTTOM: com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation;
								public static TOP: com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation;
								public static values(): native.Array<com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation>;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class DateTimeComponent {
								public static YEAR: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static QUARTER: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static MONTH: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static WEEK: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static HOUR: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static MINUTE: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static SECOND: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static MILLISECOND: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static DATE: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static TIME_OF_DAY: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static DAY: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static DAY_OF_WEEK: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static DAY_OF_YEAR: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static TIME_IN_MILLIS: com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public static values(): native.Array<com.telerik.widget.chart.engine.axes.common.DateTimeComponent>;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.propertyStore.ValueExtractor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export abstract class DateTimeHelper {
								public constructor();
								public static tryGetDateTime(param0: javalangObject, param1: com.telerik.widget.chart.engine.propertyStore.ValueExtractor): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class SeriesModelWithAxes {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.engine.axes.common.SeriesModelWithAxes interface with the provided implementation.
								 */
								public constructor(implementation: {
									getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
									getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
									attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
									detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
								});
								public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
								public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
								public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export class TimeInterval {
								public static YEAR: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static QUARTER: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static MONTH: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static WEEK: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static WEEK_OF_YEAR: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static DAY: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static DAY_OF_WEEK: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static DAY_OF_WEEK_IN_MONTH: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static DAY_OF_YEAR: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static HOUR: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static MINUTE: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static SECOND: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static MILLISECOND: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static TIME_IN_MILLIS: com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public static values(): native.Array<com.telerik.widget.chart.engine.axes.common.TimeInterval>;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.axes.common.TimeInterval;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.RadThickness.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export module layout {
								export abstract class AxisModelLayoutStrategy {
									public maxLabelHeight: number;
									public maxLabelWidth: number;
									public totalLabelWidthToAvailableWidth: number;
									public updateTicksVisibility(param0: com.telerik.android.common.math.RadRect): void;
									public getDesiredSize(param0: com.telerik.android.common.math.RadSize): com.telerik.android.common.math.RadSize;
									public getZoom(): number;
									public constructor(param0: com.telerik.widget.chart.engine.axes.AxisModel);
									public owner(): com.telerik.widget.chart.engine.axes.AxisModel;
									public getDesiredMargin(param0: com.telerik.android.common.math.RadSize): com.telerik.android.common.RadThickness;
									public applyLayoutRounding(): void;
									public getDefaultLastLabelVisibility(): com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
									public getVisibleRange(param0: com.telerik.android.common.math.RadSize): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
									public arrange(param0: com.telerik.android.common.math.RadRect): void;
									public arrangeLabelNone(param0: com.telerik.widget.chart.engine.axes.AxisLabelModel, param1: com.telerik.android.common.math.RadRect): void;
									public arrangeLabelMultiline(param0: com.telerik.widget.chart.engine.axes.AxisLabelModel, param1: com.telerik.android.common.math.RadRect): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.RadThickness.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export module layout {
								export class HorizontalAxisLayoutStrategy extends com.telerik.widget.chart.engine.axes.common.layout.AxisModelLayoutStrategy {
									public updateTicksVisibility(param0: com.telerik.android.common.math.RadRect): void;
									public getDesiredSize(param0: com.telerik.android.common.math.RadSize): com.telerik.android.common.math.RadSize;
									public getZoom(): number;
									public constructor(param0: com.telerik.widget.chart.engine.axes.AxisModel);
									public getDesiredMargin(param0: com.telerik.android.common.math.RadSize): com.telerik.android.common.RadThickness;
									public applyLayoutRounding(): void;
									public arrangeLabelRotate(param0: com.telerik.widget.chart.engine.axes.AxisLabelModel, param1: com.telerik.android.common.math.RadRect): void;
									public getDefaultLastLabelVisibility(): com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
									public getVisibleRange(param0: com.telerik.android.common.math.RadSize): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
									public arrange(param0: com.telerik.android.common.math.RadRect): void;
									public arrangeLabelNone(param0: com.telerik.widget.chart.engine.axes.AxisLabelModel, param1: com.telerik.android.common.math.RadRect): void;
									public arrangeLabelMultiline(param0: com.telerik.widget.chart.engine.axes.AxisLabelModel, param1: com.telerik.android.common.math.RadRect): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.RadThickness.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module common {
							export module layout {
								export class VerticalAxisLayoutStrategy extends com.telerik.widget.chart.engine.axes.common.layout.AxisModelLayoutStrategy {
									public updateTicksVisibility(param0: com.telerik.android.common.math.RadRect): void;
									public getDesiredSize(param0: com.telerik.android.common.math.RadSize): com.telerik.android.common.math.RadSize;
									public getZoom(): number;
									public constructor(param0: com.telerik.widget.chart.engine.axes.AxisModel);
									public getDesiredMargin(param0: com.telerik.android.common.math.RadSize): com.telerik.android.common.RadThickness;
									public applyLayoutRounding(): void;
									public getDefaultLastLabelVisibility(): com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
									public getVisibleRange(param0: com.telerik.android.common.math.RadSize): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
									public arrange(param0: com.telerik.android.common.math.RadRect): void;
									public arrangeLabelNone(param0: com.telerik.widget.chart.engine.axes.AxisLabelModel, param1: com.telerik.android.common.math.RadRect): void;
									public arrangeLabelMultiline(param0: com.telerik.widget.chart.engine.axes.AxisLabelModel, param1: com.telerik.android.common.math.RadRect): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class ContinuousAxisModel {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.engine.axes.continuous.ContinuousAxisModel interface with the provided implementation.
								 */
								public constructor(implementation: {
								});
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisTickModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisUpdateContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.TimeInterval.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class DateTimeContinuousAxisModel extends com.telerik.widget.chart.engine.axes.AxisModel implements com.telerik.widget.chart.engine.axes.continuous.ContinuousAxisModel, com.telerik.widget.chart.engine.axes.categorical.AxisSupportsCombinedSeriesPlot {
								public getMajorStepUnit(): com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public setSourceDateFormat(param0: javatextDateFormat): void;
								public setMaximum(param0: javautilCalendar): void;
								public setMajorStepUnit(param0: com.telerik.widget.chart.engine.axes.common.TimeInterval): void;
								public generateLastLabel(): com.telerik.widget.chart.engine.axes.AxisLabelModel;
								public getGapLength(): number;
								public setPlotMode(param0: com.telerik.widget.chart.engine.axes.common.AxisPlotMode): void;
								public getLabelContentCore(param0: com.telerik.widget.chart.engine.axes.AxisTickModel): javalangObject;
								public generateTicks(param0: com.telerik.widget.chart.engine.axes.continuous.ValueRange): javalangIterable<javalangObject>;
								public setDateFormat(param0: javatextDateFormat): void;
								public resetState(): void;
								public getMaximum(): javautilCalendar;
								public getActualPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public getCombineGroupKey(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): javalangObject;
								public getDateFormat(): javatextDateFormat;
								public setGapLength(param0: number): void;
								public getActualRange(): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
								public getPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public setMaximumTicks(param0: number): void;
								public createPlotInfo(param0: javalangObject): com.telerik.widget.chart.engine.axes.common.AxisPlotInfo;
								public setMajorStep(param0: number): void;
								public getMaximumTicks(): number;
								public constructor();
								public updateCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
								public getSourceDateFormat(): javatextDateFormat;
								public convertPhysicalUnitsToData(param0: number): javalangObject;
								public majorTickCount(): number;
								public setMinimum(param0: javautilCalendar): void;
								public getMinimum(): javautilCalendar;
								public plotCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
								public getMajorStep(): number;
								public onZoomChanged(): void;
							}
							export module DateTimeContinuousAxisModel {
								export class DateTimePoint {
									public date: javautilCalendar;
									public point: com.telerik.widget.chart.engine.dataPoints.DataPoint;
									public slot: com.telerik.widget.chart.engine.axes.continuous.DateTimeContinuousAxisModel.TimeSlot;
									public compareTo(param0: com.telerik.widget.chart.engine.axes.continuous.DateTimeContinuousAxisModel.DateTimePoint): number;
								}
								export class PlotInfo {
									public min: number;
									public max: number;
									public extend: number;
								}
								export class TimeSlot {
									public startTicks: number;
									public ticks: number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class LinearAxisModel extends com.telerik.widget.chart.engine.axes.continuous.NumericalAxisModel {
								public generateLastLabel(): com.telerik.widget.chart.engine.axes.AxisLabelModel;
								public majorTickCount(): number;
								public generateTicks(param0: com.telerik.widget.chart.engine.axes.continuous.ValueRange): javalangIterable<javalangObject>;
								public constructor();
								public calculateTickStep(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class LogarithmicAxisModel extends com.telerik.widget.chart.engine.axes.continuous.LinearAxisModel {
								public setLogarithmBase(param0: number): void;
								public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
								public constructor();
								public getLogarithmBase(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisTickModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisUpdateContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.NumericalAxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export abstract class NumericalAxisModel extends com.telerik.widget.chart.engine.axes.AxisModel implements com.telerik.widget.chart.engine.axes.continuous.ContinuousAxisModel {
								public actualRange: com.telerik.widget.chart.engine.axes.continuous.ValueRange;
								public pointMinMax: com.telerik.widget.chart.engine.axes.continuous.ValueRange;
								public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
								public getDesiredTickCount(): number;
								public createPlotInfo(param0: javalangObject): com.telerik.widget.chart.engine.axes.common.AxisPlotInfo;
								public setMajorStep(param0: number): void;
								public setRangeExtendDirection(param0: number): void;
								public constructor();
								public getMinimum(): number;
								public updateCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
								public getMaximum(): number;
								public setMinimum(param0: number): void;
								public convertPhysicalUnitsToData(param0: number): javalangObject;
								public getLabelContentCore(param0: com.telerik.widget.chart.engine.axes.AxisTickModel): javalangObject;
								public getRangeExtendDirection(): number;
								public getStackValue(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): com.telerik.widget.chart.engine.axes.AxisModel.StackValue;
								public setDesiredTickCount(param0: number): void;
								public plotCore(param0: com.telerik.widget.chart.engine.axes.AxisUpdateContext): void;
								public getMajorStep(): number;
								public setMaximum(param0: number): void;
								public onZoomChanged(): void;
								public getActualRange(): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
							}
							export module NumericalAxisModel {
								export class RangeCalculator {
									public minimum: number;
									public maximum: number;
									public constructor(param0: com.telerik.widget.chart.engine.axes.continuous.NumericalAxisModel, param1: com.telerik.widget.chart.engine.axes.continuous.NumericalAxisModel, param2: boolean, param3: boolean);
									public roundToMajorStep(param0: number): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
									public extend(): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class NumericalAxisOhlcPlotInfo extends com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfoBase {
								public normalizedHigh: number;
								public normalizedLow: number;
								public normalizedOpen: number;
								public normalizedClose: number;
								public physicalOpen: number;
								public physicalClose: number;
								public snapBaseTickIndex: number;
								public snapOpenTickIndex: number;
								public snapCloseTickIndex: number;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class NumericalAxisPlotInfo extends com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfoBase {
								public normalizedValue: number;
								public centerX(param0: com.telerik.android.common.math.RadRect): number;
								public centerY(param0: com.telerik.android.common.math.RadRect): number;
								public static create(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: number, param2: number, param3: number): com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfo;
								public convertToAngle(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export abstract class NumericalAxisPlotInfoBase extends com.telerik.widget.chart.engine.axes.common.AxisPlotInfo {
								public plotOriginOffset: number;
								public normalizedOrigin: number;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class NumericalAxisRangeExtendDirection {
								public static NONE: number;
								public static POSITIVE: number;
								public static NEGATIVE: number;
								public static BOTH: number;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class NumericalAxisRangePlotInfo extends com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfoBase {
								public normalizedHigh: number;
								public normalizedLow: number;
								public snapBaseTickIndex: number;
							}
						}
					}
				}
			}
		}
	}
}

import javalangComparable = java.lang.Comparable;
/// <reference path="./java.lang.Comparable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module axes {
						export module continuous {
							export class ValueRange {
								public equals(param0: javalangObject): boolean;
								public setMaximum(param0: javalangComparable<javalangObject>): void;
								public setMinimum(param0: javalangComparable<javalangObject>): void;
								public getMaximum(): javalangComparable<javalangObject>;
								public clone(): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
								public constructor(param0: javalangComparable<javalangObject>, param1: javalangComparable<javalangObject>);
								public constructor();
								public isInRangeExclusive(param0: javalangComparable<javalangObject>): boolean;
								public isInRangeInclusive(param0: javalangComparable<javalangObject>): boolean;
								public getMinimum(): javalangComparable<javalangObject>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module chartAreas {
						export class AngleRange {
							public getSweepAngle(): number;
							public constructor(param0: number, param1: number);
							public static getDefault(): com.telerik.widget.chart.engine.chartAreas.AngleRange;
							public getStartAngle(): number;
							public equals(param0: javalangObject): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.DataTuple.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.CartesianChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.CartesianChartGridModel.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module chartAreas {
						export class CartesianChartAreaModel extends com.telerik.widget.chart.engine.chartAreas.ChartAreaModelWithAxes {
							public constructor();
							public convertPointToData(param0: com.telerik.android.common.math.RadPoint, param1: com.telerik.widget.chart.engine.axes.AxisModel, param2: com.telerik.widget.chart.engine.axes.AxisModel): com.telerik.android.common.DataTuple;
							public getNotLoadedReasons(): javalangIterable<javalangObject>;
							public applyLayoutRounding(): void;
							public getGrid(): com.telerik.widget.chart.engine.decorations.CartesianChartGridModel;
							public arrangeAxes(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
						}
						export module CartesianChartAreaModel {
							export class AxisStack {
								public constructor(param0: com.telerik.widget.chart.engine.chartAreas.CartesianChartAreaModel, param1: javautilList<javalangObject>);
								public getIsEmpty(): boolean;
								public measure(param0: com.telerik.android.common.math.RadSize): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartPlotAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartMessage.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ElementCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.MessageDispatcher.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.view.ChartView.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module chartAreas {
						export class ChartAreaModel extends com.telerik.widget.chart.engine.elementTree.ChartElement {
							public constructor();
							public getPlotArea(): com.telerik.widget.chart.engine.chartAreas.ChartPlotAreaModel;
							public previewMessage(param0: com.telerik.widget.chart.engine.elementTree.ChartMessage): void;
							public onPanOffsetChanged(): void;
							public invalidate(param0: number): void;
							public processZoomChanged(): void;
							public beginUpdate(): void;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public endUpdate(param0: boolean): void;
							public getView(): com.telerik.widget.chart.engine.view.ChartView;
							public onZoomChanged(): void;
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public isSuspended(): boolean;
							public getDispatcher(): com.telerik.widget.chart.engine.elementTree.MessageDispatcher;
							public getNotLoadedReasons(): javalangIterable<javalangObject>;
							public invalidate(): void;
							public invalidateNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public isTreeLoaded(): boolean;
							public loadElementTree(param0: com.telerik.widget.chart.engine.view.ChartView): void;
							public processPanOffsetChanged(): void;
							public getSeries(): com.telerik.widget.chart.engine.elementTree.ElementCollection;
						}
					}
				}
			}
		}
	}
}

import javautilHashtable = java.util.Hashtable;
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.ChartGridModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Hashtable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module chartAreas {
						export abstract class ChartAreaModelWithAxes extends com.telerik.widget.chart.engine.chartAreas.ChartAreaModel {
							public firstAxes: javautilArrayList<javalangObject>;
							public secondAxes: javautilArrayList<javalangObject>;
							public seriesCombineStrategies: javautilHashtable<javalangObject, javalangObject>;
							public annotations: javautilArrayList<javalangObject>;
							public primaryFirstAxis: com.telerik.widget.chart.engine.axes.AxisModel;
							public primarySecondAxis: com.telerik.widget.chart.engine.axes.AxisModel;
							public constructor();
							public processZoomChanged(): void;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public setGrid(param0: com.telerik.widget.chart.engine.decorations.ChartGridModel): void;
							public removeAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public removeAnnotation(param0: com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel): void;
							public addAnnotation(param0: com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel): void;
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public setAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
							public arrangeAxes(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public isTreeLoaded(): boolean;
							public processPanOffsetChanged(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ElementCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module chartAreas {
						export class ChartPlotAreaModel extends com.telerik.widget.chart.engine.elementTree.ChartElement {
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public onChildRemoved(param0: number, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public arrange(param0: com.telerik.android.common.math.RadRect, param1: boolean): com.telerik.android.common.math.RadRect;
							public arrange(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public onChildInserted(param0: number, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public getSeries(): com.telerik.widget.chart.engine.elementTree.ElementCollection;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module chartAreas {
						export class LoadContext {
							public getChartArea(): com.telerik.widget.chart.engine.chartAreas.ChartAreaModel;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export class CategoricalBubbleDataPoint extends com.telerik.widget.chart.engine.dataPoints.CategoricalDataPoint {
							public constructor();
							public getSize(): number;
							public setSize(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export class CategoricalDataPoint extends com.telerik.widget.chart.engine.dataPoints.CategoricalDataPointBase {
							public static VALUE_PROPERTY_KEY: number;
							public constructor();
							public setValue(param0: number, param1: javalangObject): boolean;
							public getCenterY(): number;
							public getCenterX(): number;
							public getValue(param0: number): javalangObject;
							public getTooltipTokens(): native.Array<javalangObject>;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public setValue(param0: number): void;
							public getValue(): number;
							public setValueFromAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: javalangObject): void;
							public getValueForAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.categorical.CategoricalAxisPlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfoBase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export abstract class CategoricalDataPointBase extends com.telerik.widget.chart.engine.dataPoints.DataPoint {
							public numericalPlot: com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfoBase;
							public categoricalPlot: com.telerik.widget.chart.engine.axes.categorical.CategoricalAxisPlotInfo;
							public constructor();
							public getCategory(): javalangObject;
							public setCategory(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export abstract class DataPoint extends com.telerik.widget.chart.engine.elementTree.ChartNode {
							public static IS_SELECTED_PROPERTY_KEY: number;
							public static LABEL_PROPERTY_KEY: number;
							public isPositive: boolean;
							public isEmpty: boolean;
							public desiredSize: com.telerik.android.common.math.RadSize;
							public label: javalangObject;
							public dataItem: javalangObject;
							public constructor();
							public getLabel(): javalangObject;
							public getTooltipTokens(): native.Array<javalangObject>;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public getCenter(): androidgraphicsPoint;
							public setValueFromAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: javalangObject): void;
							public getDataItem(): javalangObject;
							public static checkIsEmpty(param0: javalangObject): boolean;
							public getCenterY(): number;
							public getCenterX(): number;
							public setDataItem(param0: javalangObject): void;
							public setLabel(param0: javalangObject): void;
							public setIsSelected(param0: boolean): void;
							public unloadCore(): void;
							public getIsSelected(): boolean;
							public getValueForAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export class DataPointCollection extends com.telerik.widget.chart.engine.elementTree.ElementCollection {
							public constructor(param0: com.telerik.widget.chart.engine.elementTree.ChartElement);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.NumericalAxisOhlcPlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export class OhlcDataPoint extends com.telerik.widget.chart.engine.dataPoints.CategoricalDataPointBase {
							public constructor();
							public setLow(param0: number): void;
							public getOpen(): number;
							public getTooltipTokens(): native.Array<javalangObject>;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public setOpen(param0: number): void;
							public setValueFromAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: javalangObject): void;
							public isFalling(): boolean;
							public getClose(): number;
							public setClose(param0: number): void;
							public setHigh(param0: number): void;
							public isRising(): boolean;
							public getLow(): number;
							public getHigh(): number;
							public getNumericalPlot(): com.telerik.widget.chart.engine.axes.continuous.NumericalAxisOhlcPlotInfo;
							public getValueForAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export class PieDataPoint extends com.telerik.widget.chart.engine.dataPoints.SingleValueDataPoint implements com.telerik.widget.primitives.legend.LegendSelectable {
							public constructor();
							public startAngle(): number;
							public percent(): number;
							public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
							public setRelativeOffsetFromCenter(param0: number): void;
							public setName(param0: string): void;
							public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
							public update(param0: number, param1: number, param2: number): void;
							public getName(): string;
							public getRelativeOffsetFromCenter(): number;
							public normalizedValue(): number;
							public sweepAngle(): number;
							public setIsSelected(param0: boolean): void;
							public getIsSelected(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.NumericalAxisRangePlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export class RangeDataPoint extends com.telerik.widget.chart.engine.dataPoints.CategoricalDataPointBase {
							public constructor();
							public setLow(param0: number): void;
							public setHigh(param0: number): void;
							// public numericalPlot(): com.telerik.widget.chart.engine.axes.continuous.NumericalAxisRangePlotInfo;
							public getTooltipTokens(): native.Array<javalangObject>;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public getLow(): number;
							public getHigh(): number;
							public getValueForAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): javalangObject;
							public setValueFromAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export class ScatterBubbleDataPoint extends com.telerik.widget.chart.engine.dataPoints.ScatterDataPoint {
							public constructor();
							public getSize(): number;
							public setSize(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export class ScatterDataPoint extends com.telerik.widget.chart.engine.dataPoints.DataPoint {
							public constructor();
							public getYPlot(): com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfo;
							public setYValue(param0: number): void;
							public getTooltipTokens(): native.Array<javalangObject>;
							public getYValue(): number;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public setValueFromAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: javalangObject): void;
							public setyPlot(param0: com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfo): void;
							public setXValue(param0: number): void;
							public setxPlot(param0: com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfo): void;
							public getXValue(): number;
							public getXPlot(): com.telerik.widget.chart.engine.axes.continuous.NumericalAxisPlotInfo;
							public getValueForAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module dataPoints {
						export abstract class SingleValueDataPoint extends com.telerik.widget.chart.engine.dataPoints.DataPoint {
							public constructor();
							public setValue(param0: number, param1: javalangObject): boolean;
							public getValue(param0: number): javalangObject;
							public getTooltipTokens(): native.Array<javalangObject>;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public setValue(param0: number): void;
							public getValue(): number;
							public getValueForAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): javalangObject;
						}
					}
				}
			}
		}
	}
}

import javabeansPropertyChangeListener = java.beans.PropertyChangeListener;
/// <reference path="./java.beans.PropertyChangeListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export abstract class DataPointBinding {
							public static DATA_POINT_BINDING_NAME: string;
							public constructor();
							public setPropertyChangeListener(param0: javabeansPropertyChangeListener): void;
							public getValue(param0: javalangObject): javalangObject;
							public onPropertyChanged(param0: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export class DataPointBindingEntry {
							public getDataItem(): javalangObject;
							public constructor(param0: javalangObject, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint);
							public getDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export class FieldNameDataPointBinding extends com.telerik.widget.chart.engine.databinding.ReflectiveDataPointBinding {
							public constructor();
							public setFieldName(param0: string): void;
							public constructor(param0: string);
							public getMemberValue(param0: javalangObject): javalangObject;
							public getFieldName(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export class GenericDataPointBinding extends com.telerik.widget.chart.engine.databinding.DataPointBinding {
							public constructor();
							public constructor(param0: com.telerik.android.common.Function);
							public getValue(param0: javalangObject): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export class PropertyNameDataPointBinding extends com.telerik.widget.chart.engine.databinding.ReflectiveDataPointBinding {
							public constructor();
							public setPropertyName(param0: string): void;
							public constructor(param0: string);
							public getMemberValue(param0: javalangObject): javalangObject;
							public getPropertyName(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export abstract class ReflectiveDataPointBinding extends com.telerik.widget.chart.engine.databinding.DataPointBinding {
							public constructor();
							public setName(param0: string): boolean;
							public constructor(param0: string);
							public getName(): string;
							public getValue(param0: javalangObject): javalangObject;
							public getMemberValue(param0: javalangObject): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export class CategoricalBubbleSeriesDataSource extends com.telerik.widget.chart.engine.databinding.datasources.CategoricalSeriesDataSource {
								public getBubbleSizeBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public setBubbleSizeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								public createDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export class CategoricalSeriesDataSource extends com.telerik.widget.chart.engine.databinding.datasources.CategoricalSeriesDataSourceBase {
								public valueBinding: com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public processPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsPoint): void;
								public getValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public processSize(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.android.common.math.RadSize): void;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public setValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public processDoubleArray(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: native.Array<number>): void;
								public processDouble(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: number): void;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								public createDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export abstract class CategoricalSeriesDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource {
								public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public setCategoryBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public getCategoryBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

import javabeansPropertyChangeEvent = java.beans.PropertyChangeEvent;
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.DataBindingListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export abstract class ChartSeriesDataSource {
								public itemsSource: javalangIterable<javalangObject>;
								public owner: com.telerik.widget.chart.engine.series.ChartSeriesModel;
								public bindings: javautilArrayList<javalangObject>;
								public dataChangeScheduled: boolean;
								public addBoundItemPropertyChangedListener(param0: com.telerik.widget.chart.engine.databinding.datasources.DataBindingListener): void;
								public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public getOwner(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
								public getItemsSource(): javalangIterable<javalangObject>;
								public getBindings(): javautilArrayList<javalangObject>;
								public processDoubleArray(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: native.Array<number>): void;
								public removeBoundItemPropertyChangedListener(param0: com.telerik.widget.chart.engine.databinding.datasources.DataBindingListener): void;
								public unbind(): void;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								public createDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
								public bindCore(): void;
								public rebind(param0: boolean, param1: javalangIterable<javalangObject>): void;
								public propertyChange(param0: javabeansPropertyChangeEvent): void;
								public processPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsPoint): void;
								public processSize(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.android.common.math.RadSize): void;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public processDouble(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: number): void;
								public setItemsSource(param0: javalangIterable<javalangObject>): void;
								public generateDataPoint(param0: javalangObject, param1: number): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export class DataBindingListener {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.engine.databinding.datasources.DataBindingListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onDataBindingComplete(): void;
									onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
								});
								public onDataBindingComplete(): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export class OhlcSeriesDataSource extends com.telerik.widget.chart.engine.databinding.datasources.CategoricalSeriesDataSourceBase {
								public getHighBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public getLowBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public getOpenBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public processDoubleArray(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: native.Array<number>): void;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								public createDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
								public processPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsPoint): void;
								public getCloseBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public processSize(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.android.common.math.RadSize): void;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public setCloseBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public setLowBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public setHighBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public processDouble(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: number): void;
								public setOpenBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.PieSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export class PieSeriesDataSource extends com.telerik.widget.chart.engine.databinding.datasources.SingleValuePointDataSource {
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public setNameBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.PieSeriesModel);
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								public createDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
								public getNameBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export class RangeSeriesDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.CategoricalSeriesDataSourceBase {
								public processPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsPoint): void;
								public processSize(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.android.common.math.RadSize): void;
								public getHighBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public getLowBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public setLowBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public processDoubleArray(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: native.Array<number>): void;
								public setHighBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public processDouble(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: number): void;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								public createDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export class ScatterBubbleSeriesDataSource extends com.telerik.widget.chart.engine.databinding.datasources.ScatterSeriesDataSource {
								public getBubbleSizeBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public setBubbleSizeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public processDoubleArray(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: native.Array<number>): void;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								public createDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export class ScatterSeriesDataSource extends com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource {
								public processPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsPoint): void;
								public processSize(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.android.common.math.RadSize): void;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public getYValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public processDoubleArray(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: native.Array<number>): void;
								public getXValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public setXValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public setYValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public processDouble(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: number): void;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								public createDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export abstract class SingleValuePointDataSource extends com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource {
								public processPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsPoint): void;
								public getValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public processSize(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.android.common.math.RadSize): void;
								public initializeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public setValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public processDoubleArray(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: native.Array<number>): void;
								public processDouble(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: number): void;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class AdaptiveMovingAverageKaufmanIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public getSlowPeriod(): number;
									public bindCore(): void;
									public setFastPeriod(param0: number): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public getFastPeriod(): number;
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
									public setSlowPeriod(param0: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class AverageTrueRangeIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.HighLowClosePeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class BollingerBandsIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public unbind(): void;
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public getStandardDeviations(): number;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
									public setStandardDeviations(param0: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class CommodityChannelIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.HighLowClosePeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class ExponentialMovingAverageIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public static calculateCurrentValue(param0: boolean, param1: number, param2: number, param3: number): number;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public setModified(param0: boolean): void;
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
									public isModified(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class HighLowCloseIndicatorDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.financial.HighLowIndicatorDataSourceBase {
									public closeBinding: com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public getCloseBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setCloseBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class HighLowClosePeriodIndicatorDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.financial.HighLowCloseIndicatorDataSourceBase {
									public getPeriod(): number;
									public setPeriod(param0: number): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class HighLowIndicatorDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.CategoricalSeriesDataSource {
									public highBinding: com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public lowBinding: com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setHighBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public getHighBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setLowBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public getLowBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class MacdIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ShortLongPeriodIndicatorDataSourceBase {
									public static calculateSignal(param0: number, param1: com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue, param2: number, param3: number, param4: number): number;
									public getSignalPeriod(): number;
									public unbind(): void;
									public bindCore(): void;
									public calculateMacdValue(param0: number, param1: com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue, param2: number, param3: com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue, param4: number, param5: javalangObject): number;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public generateDataPoints(param0: number, param1: com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue, param2: number, param3: com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue, param4: number, param5: com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue): void;
									public setSignalPeriod(param0: number): void;
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class ModifiedMovingAverageIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class MomentumIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public calculateValue(param0: number, param1: number): number;
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class MovingAverageIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public static calculateCurrentValue(param0: com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue): number;
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class OscillatorIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ShortLongPeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class RateOfChangeIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.MomentumIndicatorDataSource {
									public calculateValue(param0: number, param1: number): number;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class RaviIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ShortLongPeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class RelativeMomentumIndexIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public getMomentumPeriod(): number;
									public bindCore(): void;
									public setMomentumPeriod(param0: number): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class RelativeStrengthIndexIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export abstract class ShortLongPeriodIndicatorDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValueIndicatorDataSourceBase {
									public getShortPeriod(): number;
									public setShortPeriod(param0: number): void;
									public setLongPeriod(param0: number): void;
									public getLongPeriod(): number;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class SizedQueue {
									public runningSum: number;
									public size: number;
									public currentItemsCount: number;
									public constructor();
									public max(): number;
									public dequeueItem(): number;
									public min(): number;
									public enqueueItem(param0: number): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class StochasticFastIndicatorDataSource extends com.telerik.widget.chart.visualization.cartesianChart.indicators.StochasticIndicatorDataSourceBase {
									public unbind(): void;
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class StochasticSlowIndicatorDataSource extends com.telerik.widget.chart.visualization.cartesianChart.indicators.StochasticIndicatorDataSourceBase {
									public bindCore(): void;
									public setSlowingPeriod(param0: number): void;
									public getSlowingPeriod(): number;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class TrixIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class TrueRangeIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.HighLowCloseIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
									public static calculateValue(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: com.telerik.widget.chart.engine.databinding.DataPointBinding, param3: javalangObject, param4: javalangObject): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class UltimateOscillatorIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.HighLowClosePeriodIndicatorDataSourceBase {
									public static calculateCurrentValue(param0: com.telerik.widget.chart.engine.databinding.datasources.financial.SizedQueue): number;
									public bindCore(): void;
									public setPeriod3(param0: number): void;
									public getPeriod2(): number;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public getPeriod3(): number;
									public setPeriod2(param0: number): void;
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export abstract class ValueIndicatorDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.CategoricalSeriesDataSource {
									public propertyChange(param0: javabeansPropertyChangeEvent): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class ValuePeriodIndicatorDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValueIndicatorDataSourceBase {
									public getPeriod(): number;
									public setPeriod(param0: number): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module databinding {
						export module datasources {
							export module financial {
								export class WeightedMovingAverageIndicatorDataSource extends com.telerik.widget.chart.engine.databinding.datasources.financial.ValuePeriodIndicatorDataSourceBase {
									public bindCore(): void;
									public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
									public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
									public updateBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.view.ChartView.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export class CartesianChartGridContext {
							public availableRect(): com.telerik.android.common.math.RadRect;
							public constructor(param0: com.telerik.android.common.math.RadRect, param1: com.telerik.widget.chart.engine.view.ChartView, param2: com.telerik.widget.chart.engine.axes.AxisModel);
							public tickThickness(): number;
							public view(): com.telerik.widget.chart.engine.view.ChartView;
							public majorTicksCount(): number;
							public majorTicks(): javalangIterable<javalangObject>;
							public axis(): com.telerik.widget.chart.engine.axes.AxisModel;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export class CartesianChartGridModel extends com.telerik.widget.chart.engine.decorations.ChartGridModel {
							public xStripes: javautilArrayList<javalangObject>;
							public yStripes: javautilArrayList<javalangObject>;
							public xLines: javautilArrayList<javalangObject>;
							public yLines: javautilArrayList<javalangObject>;
							public constructor();
							public getPrimaryAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public setPrimaryAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public setSecondaryAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public getSecondaryAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export abstract class ChartGridModel extends com.telerik.widget.chart.engine.elementTree.ChartElement {
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisTickModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export class GridLine {
							public axisTickModel: com.telerik.widget.chart.engine.axes.AxisTickModel;
							public point1: com.telerik.android.common.math.RadPoint;
							public point2: com.telerik.android.common.math.RadPoint;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisTickModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export class GridStripe {
							public fillRect: com.telerik.android.common.math.RadRect;
							public startTick: com.telerik.widget.chart.engine.axes.AxisTickModel;
							public endTick: com.telerik.widget.chart.engine.axes.AxisTickModel;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.propertyStore.ValueExtractor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export abstract class ChartAnnotationModel extends com.telerik.widget.chart.engine.elementTree.ChartElement {
								public arrangeCore(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
								public static tryCreatePlotInfo(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: javalangObject, param2: com.telerik.widget.chart.engine.propertyStore.ValueExtractor): boolean;
								public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
								public resetState(): void;
								public update(): void;
								public constructor();
								public isUpdated(): boolean;
								public updateCore(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export abstract class MultipleAxesAnnotationModel extends com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel {
								public onFirstAxisChanged(): void;
								public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
								public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public setSecondAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
								public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public constructor();
								public setFirstAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
								public onSecondAxisChanged(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export abstract class SingleAxisAnnotationModel extends com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel {
								public getAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public constructor();
								public isUpdated(): boolean;
								public setAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export module custom {
								export class CartesianCustomAnnotationModel extends com.telerik.widget.chart.engine.decorations.annotations.custom.CustomAnnotationModel {
									public constructor();
									public arrangeCore(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export module custom {
								export abstract class CustomAnnotationModel extends com.telerik.widget.chart.engine.decorations.annotations.MultipleAxesAnnotationModel {
									public desiredSize: com.telerik.android.common.math.RadSize;
									public constructor();
									public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
									public setFirstValue(param0: javalangObject): void;
									public updateCore(): void;
									public onFirstAxisChanged(): void;
									public onSecondAxisChanged(): void;
									public isUpdated(): boolean;
									public getFirstValue(): javalangObject;
									public getSecondValue(): javalangObject;
									public setSecondValue(param0: javalangObject): void;
									public resetState(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

import androidgraphicsPaint = android.graphics.Paint;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export module custom {
								export class CustomAnnotationRenderer {
									/**
									 * Constructs a new instance of the com.telerik.widget.chart.engine.decorations.annotations.custom.CustomAnnotationRenderer interface with the provided implementation.
									 */
									public constructor(implementation: {
										measureContent(param0: javalangObject): com.telerik.android.common.math.RadSize;
										render(param0: javalangObject, param1: com.telerik.android.common.math.RadRect, param2: androidgraphicsCanvas, param3: androidgraphicsPaint): void;
									});
									public render(param0: javalangObject, param1: com.telerik.android.common.math.RadRect, param2: androidgraphicsCanvas, param3: androidgraphicsPaint): void;
									public measureContent(param0: javalangObject): com.telerik.android.common.math.RadSize;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export module line {
								export class CartesianGridLineAnnotationModel extends com.telerik.widget.chart.engine.decorations.annotations.line.GridLineAnnotationModel {
									public constructor();
									public arrangeCore(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export module line {
								export abstract class GridLineAnnotationModel extends com.telerik.widget.chart.engine.decorations.annotations.SingleAxisAnnotationModel {
									public static VALUE_PROPERTY_KEY: number;
									public constructor();
									public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
									public updateCore(): void;
									public setValue(param0: number, param1: javalangObject): boolean;
									public setValue(param0: javalangObject): void;
									public getValue(param0: number): javalangObject;
									public getValue(): javalangObject;
									public resetState(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export module plotBand {
								export class CartesianPlotBandAnnotationModel extends com.telerik.widget.chart.engine.decorations.annotations.plotBand.PlotBandAnnotationModel {
									public constructor();
									public arrangeCore(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module decorations {
						export module annotations {
							export module plotBand {
								export abstract class PlotBandAnnotationModel extends com.telerik.widget.chart.engine.decorations.annotations.SingleAxisAnnotationModel {
									public firstPlotInfo: com.telerik.widget.chart.engine.axes.common.AxisPlotInfo;
									public secondPlotInfo: com.telerik.widget.chart.engine.axes.common.AxisPlotInfo;
									public constructor();
									public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
									public updateCore(): void;
									public setTo(param0: javalangObject): void;
									public isUpdated(): boolean;
									public setFrom(param0: javalangObject): void;
									public getFrom(): javalangObject;
									public getTo(): javalangObject;
									public resetState(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class ChartAreaInvalidateFlags {
							public static NONE: number;
							public static RESET_AXES: number;
							public static INVALIDATE_AXES: number;
							public static INVALIDATE_SERIES: number;
							public static INVALIDATE_GRID: number;
							public static RESET_ANNOTATIONS: number;
							public static INVALIDATE_ANNOTATIONS: number;
							public static INVALIDATE_AXES_AND_GRID: number;
							public static INVALIDATE_ALL: number;
							public static ALL: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.LoadContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.NodeCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.TreeTraversalMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.view.ChartElementPresenter.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export abstract class ChartElement extends com.telerik.widget.chart.engine.elementTree.ChartNode {
							public children: com.telerik.widget.chart.engine.elementTree.NodeCollection;
							public constructor();
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public findAncestor(param0: javalangClass<javalangObject>): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public isAncestorOf(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): boolean;
							public onChildInserted(param0: number, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public loadCore(param0: com.telerik.widget.chart.engine.chartAreas.LoadContext): void;
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public onChildRemoved(param0: number, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public findDescendant(param0: com.telerik.widget.chart.engine.elementTree.ChartElement.Predicate): com.telerik.widget.chart.engine.elementTree.ChartNode;
							public setPresenter(param0: com.telerik.widget.chart.engine.view.ChartElementPresenter): void;
							public enumDescendants(param0: com.telerik.widget.chart.engine.elementTree.ChartElement.Predicate, param1: com.telerik.widget.chart.engine.elementTree.TreeTraversalMode): javalangIterable<javalangObject>;
							public enumDescendants(param0: com.telerik.widget.chart.engine.elementTree.TreeTraversalMode): javalangIterable<javalangObject>;
							public getPresenter(): com.telerik.widget.chart.engine.view.ChartElementPresenter;
							public enumDescendants(): javalangIterable<javalangObject>;
							public canRemoveChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public unloadCore(): void;
						}
						export module ChartElement {
							export class Predicate {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.engine.elementTree.ChartElement$Predicate interface with the provided implementation.
								 */
								public constructor(implementation: {
									apply(param0: javalangObject): boolean;
								});
								public apply(param0: javalangObject): boolean;
							}
						}
					}
				}
			}
		}
	}
}

import javautilEnumSet = java.util.EnumSet;
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.MessageDispatchMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.MessageDispatchPhase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.EnumSet.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class ChartMessage {
							public handled: boolean;
							public stopDispatch: boolean;
							public dispatchPhase: com.telerik.widget.chart.engine.elementTree.MessageDispatchPhase;
							public dispatchMode: javautilEnumSet<javalangObject>;
							public previousReceiver: com.telerik.widget.chart.engine.elementTree.ChartNode;
							public data: javalangObject;
							public constructor(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: number, param2: javalangObject, param3: com.telerik.widget.chart.engine.elementTree.MessageDispatchMode);
							public getId(): number;
							public getSender(): com.telerik.widget.chart.engine.elementTree.ChartNode;
							public static register(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.LoadContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartMessage.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.MessageDispatchMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.NodeState.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.view.ChartElementPresenter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export abstract class ChartNode extends com.telerik.widget.chart.engine.propertyStore.PropertyBagObject {
							public static PROPERTY_CHANGING_MESSAGE: number;
							public static PROPERTY_CHANGED_MESSAGE: number;
							public invalidateScheduled: boolean;
							public trackPropertyChanging: boolean;
							public trackPropertyChanged: boolean;
							public parent: com.telerik.widget.chart.engine.elementTree.ChartElement;
							public processMessage(param0: com.telerik.widget.chart.engine.elementTree.ChartMessage): void;
							public onPropertyChanging(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public getMessageDispatchMode(param0: number): com.telerik.widget.chart.engine.elementTree.MessageDispatchMode;
							public index(): number;
							public raisePropertyChanged(param0: string, param1: number): void;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public collectionIndex(): number;
							public arrange(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public clearValue(param0: number): boolean;
							public loadCore(param0: com.telerik.widget.chart.engine.chartAreas.LoadContext): void;
							public chartArea(): com.telerik.widget.chart.engine.chartAreas.ChartAreaModel;
							public getParent(): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public invalidate(): void;
							public applyLayoutRounding(): void;
							public unloadCore(): void;
							public constructor();
							public setIsVisible(param0: boolean): void;
							public getLayoutSlot(): com.telerik.android.common.math.RadRect;
							public isVisible(): boolean;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public setParent(param0: com.telerik.widget.chart.engine.elementTree.ChartElement): void;
							public onParentChanged(param0: com.telerik.widget.chart.engine.elementTree.ChartElement): void;
							public setValue(param0: number, param1: javalangObject): boolean;
							public arrange(param0: com.telerik.android.common.math.RadRect, param1: boolean): com.telerik.android.common.math.RadRect;
							public getNodeState(): com.telerik.widget.chart.engine.elementTree.NodeState;
							public getPresenter(): com.telerik.widget.chart.engine.view.ChartElementPresenter;
							public isTreeLoaded(): boolean;
							public load(param0: com.telerik.widget.chart.engine.chartAreas.LoadContext): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export abstract class ContentNode extends com.telerik.widget.chart.engine.elementTree.ChartNode {
							public desiredSize: com.telerik.android.common.math.RadSize;
							public constructor();
							public getContent(): javalangObject;
							public setContent(param0: javalangObject): void;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class ElementCollection {
							public add(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): boolean;
							public remove(param0: number): com.telerik.widget.chart.engine.elementTree.ChartNode;
							public constructor(param0: com.telerik.widget.chart.engine.elementTree.ChartElement);
							public add(param0: number, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public clearItems(): void;
							public remove(param0: javalangObject): boolean;
							public clear(): void;
							public insertItem(param0: number, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class MessageDispatchMode {
							public static BUBBLE: com.telerik.widget.chart.engine.elementTree.MessageDispatchMode;
							public static TUNNEL: com.telerik.widget.chart.engine.elementTree.MessageDispatchMode;
							public static BUBBLE_AND_TUNNEL: com.telerik.widget.chart.engine.elementTree.MessageDispatchMode;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.elementTree.MessageDispatchMode;
							public static values(): native.Array<com.telerik.widget.chart.engine.elementTree.MessageDispatchMode>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class MessageDispatchPhase {
							public static BUBBLE: com.telerik.widget.chart.engine.elementTree.MessageDispatchPhase;
							public static TUNNEL: com.telerik.widget.chart.engine.elementTree.MessageDispatchPhase;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.elementTree.MessageDispatchPhase;
							public static values(): native.Array<com.telerik.widget.chart.engine.elementTree.MessageDispatchPhase>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartMessage.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class MessageDispatcher {
							public dispatchMessage(param0: com.telerik.widget.chart.engine.elementTree.ChartMessage): void;
							public isEnabled(): boolean;
							public constructor(param0: com.telerik.widget.chart.engine.chartAreas.ChartAreaModel);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class ModifyChildrenResult {
							public static ACCEPT: com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public static CANCEL: com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public static REFUSE: com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public static values(): native.Array<com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class NodeCollection {
							public getOwner(): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public remove(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public add(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): boolean;
							public remove(param0: number): com.telerik.widget.chart.engine.elementTree.ChartNode;
							public constructor(param0: com.telerik.widget.chart.engine.elementTree.ChartElement);
							public clear(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class NodeState {
							public static INITIAL: com.telerik.widget.chart.engine.elementTree.NodeState;
							public static LOADING: com.telerik.widget.chart.engine.elementTree.NodeState;
							public static LOADED: com.telerik.widget.chart.engine.elementTree.NodeState;
							public static UNLOADING: com.telerik.widget.chart.engine.elementTree.NodeState;
							public static UNLOADED: com.telerik.widget.chart.engine.elementTree.NodeState;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.elementTree.NodeState;
							public static values(): native.Array<com.telerik.widget.chart.engine.elementTree.NodeState>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export class TreeTraversalMode {
							public static DEPTH_FIRST: com.telerik.widget.chart.engine.elementTree.TreeTraversalMode;
							public static BREADTH_FIRST: com.telerik.widget.chart.engine.elementTree.TreeTraversalMode;
							public static values(): native.Array<com.telerik.widget.chart.engine.elementTree.TreeTraversalMode>;
							public static valueOf(param0: string): com.telerik.widget.chart.engine.elementTree.TreeTraversalMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module elementTree {
						export module events {
							export class RadPropertyEventArgs {
								public Cancel: boolean;
								public newValue(): javalangObject;
								public getKey(): number;
								public getPropertyName(): string;
								public constructor(param0: string, param1: javalangObject, param2: javalangObject);
								public constructor(param0: number, param1: javalangObject, param2: javalangObject);
								public oldValue(): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module propertyStore {
						export class FastPropertyStore {
							public constructor();
							public containsEntry(param0: number): boolean;
							public getEntry(param0: number): javalangObject;
							public clear(): void;
							public removeEntry(param0: number): void;
							public setEntry(param0: number, param1: javalangObject): void;
						}
						export module FastPropertyStore {
							export class Entry {
								public getVal(param0: number): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.propertyStore.FastPropertyStore.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module propertyStore {
						export abstract class PropertyBagObject {
							public propertyStore: com.telerik.widget.chart.engine.propertyStore.FastPropertyStore;
							public constructor();
							public setValue(param0: number, param1: javalangObject): boolean;
							public getTypedValue(param0: number, param1: javalangObject): javalangObject;
							public isLocalValue(param0: number): boolean;
							public getValue(param0: number): javalangObject;
							public clearValue(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module propertyStore {
						export class PropertyKeyValue {
							public EntryKey: number;
							public Element: number;
							public constructor(param0: number, param1: number);
						}
					}
				}
			}
		}
	}
}

import javalangreflectType = java.lang.reflect.Type;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module propertyStore {
						export class PropertyKeys {
							public static getNameByKey(param0: javalangreflectType, param1: number): string;
							public static register(param0: javalangreflectType, param1: string): number;
							public static register(param0: javalangreflectType, param1: string, param2: number): number;
							public static getPropertyFlags(param0: number): number;
						}
					}
				}
			}
		}
	}
}

import androidutilSparseArray = android.util.SparseArray;
import javautilMap = java.util.Map;
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module propertyStore {
						export class PropertyLookup {
							public namesByKey: androidutilSparseArray<javalangObject>;
							public keysByName: javautilMap<javalangObject,javalangObject>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module propertyStore {
						export class ValueExtractor {
							public value: javalangObject;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeriesPlotStrategy.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeriesRoundLayoutStrategy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export class BarSeriesModel extends com.telerik.widget.chart.engine.series.CategoricalSeriesModel {
							public constructor();
							public setMinBarWidth(param0: number): void;
							public getMaxBarWidth(): number;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public getCombinedPlotStrategy(): com.telerik.widget.chart.engine.series.combination.CombinedSeriesPlotStrategy;
							public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public setMaxBarWidth(param0: number): void;
							public getCombinedRoundLayoutStrategy(): com.telerik.widget.chart.engine.series.combination.CombinedSeriesRoundLayoutStrategy;
							public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
							public getStackGroupKey(): javalangObject;
							public applyLayoutRounding(): void;
							public getMinBarWidth(): number;
							public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public getCombineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export abstract class CategoricalSeriesModel extends com.telerik.widget.chart.engine.series.SeriesModelWithAxes implements com.telerik.widget.chart.engine.series.combination.SupportCombineMode {
							public static COMBINE_MODE_PROPERTY_KEY: number;
							public static STACK_GROUP_KEY_PROPERTY_KEY: number;
							public constructor();
							public setCombineMode(param0: com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode): void;
							public getDefaultPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
							public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public getStackGroupKey(): javalangObject;
							public getCombineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
							public setStackGroupKey(param0: javalangObject): void;
							public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotDirection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.CategoricalDataPointBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.CategoricalSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export class CategoricalSeriesRoundLayoutContext {
							public plotDirection(): com.telerik.widget.chart.engine.axes.common.AxisPlotDirection;
							public plotArea(): com.telerik.android.common.math.RadRect;
							public snapPointToGridLine(param0: com.telerik.widget.chart.engine.dataPoints.CategoricalDataPointBase): void;
							public plotOrigin(): number;
							public plotLine(): number;
							public constructor(param0: com.telerik.widget.chart.engine.series.CategoricalSeriesModel);
							public snapPointToPlotLine(param0: com.telerik.widget.chart.engine.dataPoints.CategoricalDataPointBase): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPointCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeriesPlotStrategy.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeriesRoundLayoutStrategy.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export abstract class ChartSeriesModel extends com.telerik.widget.chart.engine.elementTree.ChartElement {
							public static DATA_POINTS_MODIFIED_MESSAGE_KEY: number;
							public constructor();
							public visibleDataPoints(): javautilList<javalangObject>;
							public dataPoints(): com.telerik.widget.chart.engine.dataPoints.DataPointCollection;
							public getCombinedPlotStrategy(): com.telerik.widget.chart.engine.series.combination.CombinedSeriesPlotStrategy;
							public getCombinedRoundLayoutStrategy(): com.telerik.widget.chart.engine.series.combination.CombinedSeriesRoundLayoutStrategy;
							public getDataPointsChangedListener(): com.telerik.widget.chart.engine.series.ChartSeriesModel.DataPointsChangedListener;
							public onChildInserted(param0: number, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public getDefaultPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
							public onChildRemoved(param0: number, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public setDataPointsChangedListener(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel.DataPointsChangedListener): void;
							public updateVisibleDataPoints(): void;
							public static selectPlotMode(param0: javalangIterable<javalangObject>): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
							public getZoomedRect(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
						}
						export module ChartSeriesModel {
							export class DataPointsChangedListener {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.engine.series.ChartSeriesModel$DataPointsChangedListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								});
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPointCollection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export abstract class DataPointSeriesModel extends com.telerik.widget.chart.engine.series.ChartSeriesModel {
							public constructor();
							public getVirtualizationEnabled(): boolean;
							public visibleDataPoints(): javautilList<javalangObject>;
							public dataPoints(): com.telerik.widget.chart.engine.dataPoints.DataPointCollection;
							public updateVisibleDataPoints(): void;
							public updateVisibleDataPointsCore(): void;
							public setVirtualizationEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export class Ohlc {
							public constructor();
							public open(): number;
							public close(): number;
							public high(): number;
							public low(): number;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export class OhlcSeriesModel extends com.telerik.widget.chart.engine.series.SeriesModelWithAxes {
							public constructor();
							public getDefaultPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
							public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.AngleRange.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartMessage.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export class PieSeriesModel extends com.telerik.widget.chart.engine.series.DataPointSeriesModel {
							public static RANGE_PROPERTY_KEY: number;
							public static LABEL_FORMAT_PROPERTY_KEY: number;
							public static DEFAULT_LABEL_FORMAT: string;
							public static DEFAULT_NO_PERCENTAGE_LABEL_FORMAT: string;
							public constructor();
							public processMessage(param0: com.telerik.widget.chart.engine.elementTree.ChartMessage): void;
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public setLabelFormat(param0: string): void;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public setRange(param0: com.telerik.widget.chart.engine.chartAreas.AngleRange): void;
							public onPropertyChanged(param0: com.telerik.widget.chart.engine.elementTree.events.RadPropertyEventArgs): void;
							public getLabelFormat(): string;
							public maxRelativeOffsetFromCenter(): number;
							public getDisplayPercentage(): boolean;
							public getRange(): com.telerik.widget.chart.engine.chartAreas.AngleRange;
							public setDisplayPercentage(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export class PointSeriesModel extends com.telerik.widget.chart.engine.series.CategoricalSeriesModel {
							public constructor();
							public getDefaultPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
							public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public getStackGroupKey(): javalangObject;
							public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public getCombineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export class ScatterSeriesModel extends com.telerik.widget.chart.engine.series.SeriesModelWithAxes {
							public constructor();
							public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
							public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
							public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
							public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export abstract class SeriesModelWithAxes extends com.telerik.widget.chart.engine.series.DataPointSeriesModel implements com.telerik.widget.chart.engine.axes.common.SeriesModelWithAxes {
							public constructor();
							public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
							public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
							public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
							public updateVisibleDataPointsCore(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export class ChartSeriesCombineMode {
								public static NONE: com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
								public static CLUSTER: com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
								public static STACK: com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
								public static STACK_100: com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
								public static values(): native.Array<com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode>;
								public static valueOf(param0: string): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Hashtable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export class ChartSeriesCombineStrategy {
								public combinedSeries: javautilArrayList<javalangObject>;
								public nonCombinedSeries: javautilArrayList<javalangObject>;
								public hasCombination: boolean;
								public maximumStackSums: javautilHashtable<javalangObject,javalangObject>;
								public minimumStackSums: javautilHashtable<javalangObject,javalangObject>;
								public stackAxis: com.telerik.widget.chart.engine.axes.AxisModel;
								public stackValueAxes: javautilArrayList<javalangObject>;
								public isUpdated: boolean;
								public update(param0: javalangIterable<javalangObject>, param1: com.telerik.widget.chart.engine.axes.AxisModel): void;
								public plot(): void;
								public reset(): void;
								public constructor();
								public applyLayoutRounding(param0: com.telerik.widget.chart.engine.chartAreas.ChartAreaModel): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombineStack.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.SupportCombineMode.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export class CombineGroup {
								public stacks(): javautilArrayList<javalangObject>;
								public constructor();
								public getStack(param0: com.telerik.widget.chart.engine.series.combination.SupportCombineMode): com.telerik.widget.chart.engine.series.combination.CombineStack;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export class CombineStack {
								public key: javalangObject;
								public positiveSum: number;
								public negativeSum: number;
								public points(): javautilArrayList<javalangObject>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export class CombinedSeries {
								public series(): javautilArrayList<javalangObject>;
								public groups(): javautilArrayList<javalangObject>;
								public stackValueAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public constructor(param0: javalangreflectType, param1: com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode, param2: number, param3: com.telerik.widget.chart.engine.axes.AxisModel, param4: com.telerik.widget.chart.engine.axes.AxisModel);
								public seriesType(): javalangreflectType;
								public stackAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public combineIndex(): number;
								public combineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export abstract class CombinedSeriesPlotStrategy {
								public constructor();
								public plot(param0: com.telerik.widget.chart.engine.series.combination.CombinedSeries, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export abstract class CombinedSeriesRoundLayoutStrategy {
								public constructor();
								public applyLayoutRounding(param0: com.telerik.widget.chart.engine.chartAreas.ChartAreaModel, param1: com.telerik.widget.chart.engine.series.combination.CombinedSeries): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export class SupportCombineMode {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.engine.series.combination.SupportCombineMode interface with the provided implementation.
								 */
								public constructor(implementation: {
									getCombineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
									getStackGroupKey(): javalangObject;
								});
								public getCombineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
								public getStackGroupKey(): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export module barSeries {
								export class CombinedBarSeriesPlotStrategy extends com.telerik.widget.chart.engine.series.combination.CombinedSeriesPlotStrategy {
									public constructor();
									public plot(param0: com.telerik.widget.chart.engine.series.combination.CombinedSeries, param1: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module combination {
							export module barSeries {
								export class CombinedBarSeriesRoundLayoutStrategy extends com.telerik.widget.chart.engine.series.combination.CombinedSeriesRoundLayoutStrategy {
									public constructor();
									public applyLayoutRounding(param0: com.telerik.widget.chart.engine.chartAreas.ChartAreaModel, param1: com.telerik.widget.chart.engine.series.combination.CombinedSeries): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module rangeSeries {
							export class CombinedRangeBarSeriesRoundLayoutStrategy extends com.telerik.widget.chart.engine.series.combination.CombinedSeriesRoundLayoutStrategy {
								public constructor();
								public applyLayoutRounding(param0: com.telerik.widget.chart.engine.chartAreas.ChartAreaModel, param1: com.telerik.widget.chart.engine.series.combination.CombinedSeries): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module rangeSeries {
							export class Range {
								public low(): number;
								public constructor(param0: number, param1: number);
								public constructor();
								public high(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeriesPlotStrategy.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.CombinedSeriesRoundLayoutStrategy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module rangeSeries {
							export class RangeBarSeriesModel extends com.telerik.widget.chart.engine.series.rangeSeries.RangeSeriesBaseModel implements com.telerik.widget.chart.engine.series.combination.SupportCombineMode {
								public getCombinedPlotStrategy(): com.telerik.widget.chart.engine.series.combination.CombinedSeriesPlotStrategy;
								public setCombineMode(param0: com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode): void;
								public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
								public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
								public getCombineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
								public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getShouldRoundLayout(): boolean;
								public constructor();
								public getDefaultPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public getCombinedRoundLayoutStrategy(): com.telerik.widget.chart.engine.series.combination.CombinedSeriesRoundLayoutStrategy;
								public getStackGroupKey(): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module rangeSeries {
							export class RangeSeriesBaseModel extends com.telerik.widget.chart.engine.series.CategoricalSeriesModel {
								public detachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel): void;
								public arrangeOverride(param0: com.telerik.android.common.math.RadRect): com.telerik.android.common.math.RadRect;
								public attachAxis(param0: com.telerik.widget.chart.engine.axes.AxisModel, param1: com.telerik.widget.chart.engine.axes.AxisType): void;
								public getSecondAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getCombineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
								public getFirstAxis(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getShouldRoundLayout(): boolean;
								public canAddChild(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): com.telerik.widget.chart.engine.elementTree.ModifyChildrenResult;
								public constructor();
								public getDefaultPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public getStackGroupKey(): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotDirection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.RangeDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.rangeSeries.RangeSeriesBaseModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module series {
						export module rangeSeries {
							export class RangeSeriesBaseRoundLayoutContext {
								public plotLine: number;
								public plotOrigin: number;
								public plotDirection: com.telerik.widget.chart.engine.axes.common.AxisPlotDirection;
								public plotArea: com.telerik.android.common.math.RadRect;
								public constructor(param0: com.telerik.widget.chart.engine.series.rangeSeries.RangeSeriesBaseModel);
								public snapPointToGridLine(param0: com.telerik.widget.chart.engine.dataPoints.RangeDataPoint): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module view {
						export class ChartElementPresenter {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.engine.view.ChartElementPresenter interface with the provided implementation.
							 */
							public constructor(implementation: {
								refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								invalidatePalette(): void;
								getCollectionIndex(): number;
							});
							public invalidatePalette(): void;
							public getCollectionIndex(): number;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module view {
						export class ChartSeries {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.engine.view.ChartSeries interface with the provided implementation.
							 */
							public constructor(implementation: {
								onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								invalidatePalette(): void;
								getCollectionIndex(): number;
							});
							public invalidatePalette(): void;
							public getCollectionIndex(): number;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module engine {
					export module view {
						export class ChartView {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.engine.view.ChartView interface with the provided implementation.
							 */
							public constructor(implementation: {
								getViewportWidth(): number;
								getViewportHeight(): number;
								getZoomWidth(): number;
								getZoomHeight(): number;
								getPanOffsetX(): number;
								getPanOffsetY(): number;
								getPlotAreaClip(): com.telerik.android.common.math.RadRect;
								refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								invalidatePalette(): void;
								getCollectionIndex(): number;
							});
							public invalidatePalette(): void;
							public getZoomWidth(): number;
							public getCollectionIndex(): number;
							public getPanOffsetY(): number;
							public getZoomHeight(): number;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public getViewportHeight(): number;
							public getPanOffsetX(): number;
							public getViewportWidth(): number;
							public getPlotAreaClip(): com.telerik.android.common.math.RadRect;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export abstract class ChartAnnotation extends com.telerik.widget.chart.visualization.common.ChartElementPresenter {
							public static ANNOTATION_Z_INDEX: number;
							public constructor();
							public getElement(): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
							public onAttached(): void;
							public getModel(): com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public render(param0: androidgraphicsCanvas): void;
							public processPaletteEntry(param0: com.telerik.widget.palettes.PaletteEntry): void;
							public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
							public invalidatePalette(): void;
							public getCollectionIndex(): number;
							public updatePresenters(): void;
							public drawCore(param0: androidgraphicsCanvas): void;
							public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public setClipToPlotArea(param0: boolean): void;
							public getClipToPlotArea(): boolean;
							public getDefaultZIndex(): number;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export class ChartAnnotationLabelLocation {
							public static LEFT: com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation;
							public static TOP: com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation;
							public static RIGHT: com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation;
							public static BOTTOM: com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation;
							public static INSIDE: com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation;
							public static values(): native.Array<com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export class ChartAnnotationLabelUpdateContext {
							public location: com.telerik.android.common.math.RadPoint;
							public layoutSlot: com.telerik.android.common.math.RadRect;
							public constructor(param0: com.telerik.android.common.math.RadPoint);
							public constructor(param0: com.telerik.android.common.math.RadRect);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.annotations.HorizontalAlignment.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.annotations.VerticalAlignment.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export abstract class ChartLabelAnnotation extends com.telerik.widget.chart.visualization.annotations.ChartAnnotation {
							public static LABEL_FORMAT_PROPERTY_KEY: number;
							public static LABEL_LOCATION_PROPERTY_KEY: number;
							public static HORIZONTAL_ALIGNMENT_PROPERTY_KEY: number;
							public static VERTICAL_ALIGNMENT_PROPERTY_KEY: number;
							public static HORIZONTAL_OFFSET_PROPERTY_KEY: number;
							public static VERTICAL_OFFSET_PROPERTY_KEY: number;
							public getLabelLocation(): com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation;
							public setLabelLocation(param0: com.telerik.widget.chart.visualization.annotations.ChartAnnotationLabelLocation): void;
							public setLabelFormat(param0: string): void;
							public processPaletteEntry(param0: com.telerik.widget.palettes.PaletteEntry): void;
							public getLabel(): string;
							public getLabelFormat(): string;
							public getLabelHorizontalAlignment(): com.telerik.widget.chart.visualization.annotations.HorizontalAlignment;
							public getLabelSize(): number;
							public invalidatePalette(): void;
							public getLabelHorizontalOffset(): number;
							public updatePresenters(): void;
							public getLabelVerticalOffset(): number;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public setLabelVerticalOffset(param0: number): void;
							public setLabelHorizontalAlignment(param0: com.telerik.widget.chart.visualization.annotations.HorizontalAlignment): void;
							public constructor();
							public getLabelVerticalAlignment(): com.telerik.widget.chart.visualization.annotations.VerticalAlignment;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public setLabelVerticalAlignment(param0: com.telerik.widget.chart.visualization.annotations.VerticalAlignment): void;
							public getCollectionIndex(): number;
							public drawCore(param0: androidgraphicsCanvas): void;
							public setLabel(param0: string): void;
							public setLabelSize(param0: number): void;
							public setLabelHorizontalOffset(param0: number): void;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export class HorizontalAlignment {
							public static LEFT: com.telerik.widget.chart.visualization.annotations.HorizontalAlignment;
							public static CENTER: com.telerik.widget.chart.visualization.annotations.HorizontalAlignment;
							public static RIGHT: com.telerik.widget.chart.visualization.annotations.HorizontalAlignment;
							public static values(): native.Array<com.telerik.widget.chart.visualization.annotations.HorizontalAlignment>;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.annotations.HorizontalAlignment;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export class VerticalAlignment {
							public static TOP: com.telerik.widget.chart.visualization.annotations.VerticalAlignment;
							public static BOTTOM: com.telerik.widget.chart.visualization.annotations.VerticalAlignment;
							public static CENTER: com.telerik.widget.chart.visualization.annotations.VerticalAlignment;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.annotations.VerticalAlignment;
							public static values(): native.Array<com.telerik.widget.chart.visualization.annotations.VerticalAlignment>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.CartesianAxis.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export module cartesian {
							export abstract class CartesianChartAnnotation extends com.telerik.widget.chart.visualization.annotations.ChartLabelAnnotation {
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public setAxis(param0: com.telerik.widget.chart.visualization.common.CartesianAxis): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis);
								public getAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getCollectionIndex(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.annotations.custom.CustomAnnotationRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.annotations.HorizontalAlignment.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.annotations.VerticalAlignment.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.CartesianAxis.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export module cartesian {
							export class CartesianCustomAnnotation extends com.telerik.widget.chart.visualization.annotations.cartesian.CartesianChartAnnotation {
								public getHorizontalAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public drawCore(param0: androidgraphicsCanvas): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public getHorizontalOffset(): number;
								public getModel(): com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getCollectionIndex(): number;
								public getContent(): javalangObject;
								public setVerticalAxis(param0: com.telerik.widget.chart.visualization.common.CartesianAxis): void;
								public setHorizontalValue(param0: javalangObject): void;
								public setVerticalValue(param0: javalangObject): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis, param1: com.telerik.widget.chart.visualization.common.CartesianAxis, param2: javalangObject, param3: javalangObject, param4: javalangObject);
								public measureNodeOverride(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public getHorizontalAlignment(): com.telerik.widget.chart.visualization.annotations.HorizontalAlignment;
								public setVerticalOffset(param0: number): void;
								public getVerticalAlignment(): com.telerik.widget.chart.visualization.annotations.VerticalAlignment;
								public defaultPaletteFamily(): string;
								public setContentRenderer(param0: com.telerik.widget.chart.engine.decorations.annotations.custom.CustomAnnotationRenderer): void;
								public invalidatePalette(): void;
								public constructor();
								public onAttached(): void;
								public getVerticalOffset(): number;
								public getVerticalAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis);
								public getContentRenderer(): com.telerik.widget.chart.engine.decorations.annotations.custom.CustomAnnotationRenderer;
								public setVerticalAlignment(param0: com.telerik.widget.chart.visualization.annotations.VerticalAlignment): void;
								public getVerticalValue(): javalangObject;
								public getHorizontalValue(): javalangObject;
								public setHorizontalOffset(param0: number): void;
								public setContent(param0: javalangObject): void;
								public setHorizontalAlignment(param0: com.telerik.widget.chart.visualization.annotations.HorizontalAlignment): void;
								public setHorizontalAxis(param0: com.telerik.widget.chart.visualization.common.CartesianAxis): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.CartesianAxis.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export module cartesian {
							export class CartesianGridLineAnnotation extends com.telerik.widget.chart.visualization.annotations.cartesian.CartesianStrokedAnnotation {
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public setValue(param0: number, param1: javalangObject): void;
								public getValue(param0: number): javalangObject;
								public getValue(): javalangObject;
								public drawCore(param0: androidgraphicsCanvas): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public defaultPaletteFamily(): string;
								public getModel(): com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel;
								public invalidatePalette(): void;
								public constructor();
								public setValue(param0: number, param1: number, param2: javalangObject): void;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getCollectionIndex(): number;
								public setValue(param0: javalangObject): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis);
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis, param1: javalangObject);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.CartesianAxis.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export module cartesian {
							export class CartesianPlotBandAnnotation extends com.telerik.widget.chart.visualization.annotations.cartesian.CartesianStrokedAnnotation {
								public static FILL_COLOR_PROPERTY_KEY: number;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public drawCore(param0: androidgraphicsCanvas): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public defaultPaletteFamily(): string;
								public getModel(): com.telerik.widget.chart.engine.decorations.annotations.ChartAnnotationModel;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setFrom(param0: javalangObject): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis, param1: javalangObject, param2: javalangObject);
								public getFrom(): javalangObject;
								public setTo(param0: javalangObject): void;
								public getCollectionIndex(): number;
								public processPaletteEntry(param0: com.telerik.widget.palettes.PaletteEntry): void;
								public isStrokeInset(): boolean;
								public getTo(): javalangObject;
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis);
								public setFillColor(param0: number): void;
								public getFillColor(): number;
							}
						}
					}
				}
			}
		}
	}
}

import androidgraphicsPathEffect = android.graphics.PathEffect;
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.PathEffect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.CartesianAxis.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module annotations {
						export module cartesian {
							export abstract class CartesianStrokedAnnotation extends com.telerik.widget.chart.visualization.annotations.cartesian.CartesianChartAnnotation {
								public static STROKE_COLOR_PROPERTY_KEY: number;
								public static STROKE_WIDTH_PROPERTY_KEY: number;
								public strokePaint: androidgraphicsPaint;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public getStrokeEffect(): androidgraphicsPathEffect;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public defaultPaletteFamily(): string;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setStrokeColor(param0: number): void;
								public getStrokeColor(): number;
								public getCollectionIndex(): number;
								public processPaletteEntry(param0: com.telerik.widget.palettes.PaletteEntry): void;
								public setStrokeWidth(param0: number): void;
								public isStrokeInset(): boolean;
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis);
								public setStrokeEffect(param0: androidgraphicsPathEffect): void;
								public getStrokeWidth(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangeAction.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartBehavior.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class BehaviorCollectionChangedInfo {
							public getRemovedBehavior(): com.telerik.widget.chart.visualization.behaviors.ChartBehavior;
							public constructor(param0: com.telerik.widget.chart.visualization.behaviors.ChartBehavior, param1: com.telerik.widget.chart.visualization.behaviors.ChartBehavior, param2: com.telerik.android.common.CollectionChangeAction);
							public setAddedBehavior(param0: com.telerik.widget.chart.visualization.behaviors.ChartBehavior): void;
							public setRemovedBehavior(param0: com.telerik.widget.chart.visualization.behaviors.ChartBehavior): void;
							public getAddedBehavior(): com.telerik.widget.chart.visualization.behaviors.ChartBehavior;
							public setAction(param0: com.telerik.android.common.CollectionChangeAction): void;
							public getAction(): com.telerik.android.common.CollectionChangeAction;
						}
					}
				}
			}
		}
	}
}

import androidviewViewGroupLayoutParams = android.view.ViewGroup.LayoutParams;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartAnimationPanel {
							public onPropertyChanged(param0: javalangObject, param1: string, param2: javalangObject): void;
							public addAnimation(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation): void;
							public addView(param0: androidviewView, param1: number, param2: androidviewViewGroupLayoutParams): void;
							public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public onAnimationFinished(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation, param1: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
							public onCollectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public constructor(param0: androidcontentContext);
							public onMeasure(param0: number, param1: number): void;
							public getChart(): com.telerik.widget.chart.visualization.common.RadChartViewBase;
							public startAllAnimations(): void;
							public setChart(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public onDraw(param0: androidgraphicsCanvas): void;
							public removeAnimation(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation): boolean;
						}
					}
				}
			}
		}
	}
}

import androidviewMotionEvent = android.view.MotionEvent;
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.DrawListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartDataContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export abstract class ChartBehavior extends com.telerik.android.common.PropertyManager {
							public constructor();
							public onDrag(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: com.telerik.android.common.math.RadSize, param3: boolean): boolean;
							public onAttached(): void;
							public onTap(param0: androidviewMotionEvent): boolean;
							public chart(): com.telerik.widget.chart.visualization.common.RadChartViewBase;
							public onUp(param0: androidviewMotionEvent): boolean;
							public getDrawListener(): com.telerik.android.primitives.widget.tooltip.contracts.DrawListener;
							public onDoubleTap(param0: androidviewMotionEvent): boolean;
							public onPinchComplete(): void;
							public reset(): void;
							public detach(): void;
							public getContext(param0: androidgraphicsPoint): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public onDown(param0: androidviewMotionEvent): boolean;
							public onHold(param0: androidviewMotionEvent): boolean;
							public onPinch(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector, param1: androidviewMotionEvent): boolean;
							public attach(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public onDetached(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartBehavior.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartBehaviorCollection extends com.telerik.android.common.ObservableCollection {
							public constructor();
							public add(param0: number, param1: com.telerik.widget.chart.visualization.behaviors.ChartBehavior): void;
							public remove(param0: javalangObject): boolean;
							public remove(param0: number): javalangObject;
							public add(param0: com.telerik.widget.chart.visualization.behaviors.ChartBehavior): boolean;
							public add(param0: number, param1: javalangObject): void;
							public clear(): void;
							public add(param0: javalangObject): boolean;
							public remove(param0: number): com.telerik.widget.chart.visualization.behaviors.ChartBehavior;
							public set(param0: number, param1: com.telerik.widget.chart.visualization.behaviors.ChartBehavior): com.telerik.widget.chart.visualization.behaviors.ChartBehavior;
							public constructor(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.DataPointInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartDataContext {
							public getDataPointInfos(): javautilList<javalangObject>;
							public setTouchLocation(param0: androidgraphicsPoint): void;
							public getDataPoints(): javautilList<javalangObject>;
							public setClosestDataPoint(param0: com.telerik.widget.chart.visualization.behaviors.DataPointInfo): void;
							public getClosestDataPoint(): com.telerik.widget.chart.visualization.behaviors.DataPointInfo;
							public chart(): com.telerik.widget.chart.visualization.common.RadChartViewBase;
							public constructor(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase, param1: javautilList<javalangObject>, param2: javautilList<javalangObject>, param3: com.telerik.widget.chart.visualization.behaviors.DataPointInfo);
							public setDataPointInfos(param0: javautilList<javalangObject>): void;
							public getTouchLocation(): androidgraphicsPoint;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.DrawListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartZoomStrategy.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.PanZoomListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.DeferredZoomPresenter.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartPanAndZoomBehavior extends com.telerik.widget.chart.visualization.behaviors.ChartBehavior {
							public getHandleDoubleTap(): boolean;
							public getZoomMode(): number;
							public setZoomToChart(param0: number, param1: number, param2: number, param3: number): void;
							public addPanZoomListener(param0: com.telerik.widget.chart.visualization.behaviors.PanZoomListener): void;
							public getDrawListener(): com.telerik.android.primitives.widget.tooltip.contracts.DrawListener;
							public setZoomStrategy(param0: com.telerik.widget.chart.visualization.behaviors.ChartZoomStrategy): void;
							public setHandleDoubleTap(param0: boolean): void;
							public isZoomed(): boolean;
							public onPinchComplete(): void;
							public reset(): void;
							public getZoomStrategy(): com.telerik.widget.chart.visualization.behaviors.ChartZoomStrategy;
							public getPanMode(): number;
							public setZoomMode(param0: number): void;
							public removePanZoomListener(param0: com.telerik.widget.chart.visualization.behaviors.PanZoomListener): void;
							public constructor();
							public onDrag(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: com.telerik.android.common.math.RadSize, param3: boolean): boolean;
							public isPinching(): boolean;
							public notifyListenersOnZoom(param0: number, param1: number): void;
							public setPanOffsetToChart(param0: number, param1: number): void;
							public onDoubleTap(param0: androidviewMotionEvent): boolean;
							public setPanMode(param0: number): void;
							public setDeferredZoomPresenter(param0: com.telerik.widget.chart.visualization.behaviors.views.DeferredZoomPresenter): void;
							public getDeferredZoomPresenter(): com.telerik.widget.chart.visualization.behaviors.views.DeferredZoomPresenter;
							public setZoomToChart(param0: number, param1: number, param2: number): void;
							public onPinch(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector, param1: androidviewMotionEvent): boolean;
							public notifyListenersOnPan(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartPanZoomMode {
							public static NONE: number;
							public static HORIZONTAL: number;
							public static VERTICAL: number;
							public static BOTH: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.DrawListener.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartDataContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.TooltipContextNeededListener.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export abstract class ChartPopupBehavior extends com.telerik.widget.chart.visualization.behaviors.ChartBehavior implements com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter {
							public tooltipContentAdapter: com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter;
							public maxTouchDistanceTolerance: number;
							public context: androidcontentContext;
							public popupPresenter: com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase;
							public selectedDataPoint: com.telerik.widget.chart.engine.dataPoints.DataPoint;
							public rawOffset(): androidgraphicsPoint;
							public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getDrawListener(): com.telerik.android.primitives.widget.tooltip.contracts.DrawListener;
							public setContentAdapter(param0: com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter): void;
							public contentAdapter(): com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter;
							public desiredPopupLocation(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): androidgraphicsPoint;
							public getTooltipData(param0: javalangObject): native.Array<javalangObject>;
							public getContextNeededListener(): com.telerik.widget.chart.visualization.behaviors.TooltipContextNeededListener;
							public getPopupPresenter(): com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase;
							public getPaletteFamilyName(): string;
							public alignTooltipVertically(): boolean;
							public validateDataContext(param0: com.telerik.widget.chart.visualization.behaviors.ChartDataContext): boolean;
							public isTooltipDisplayed(): boolean;
							public constructor();
							public open(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): boolean;
							public setApplyDefaultStyles(param0: boolean): void;
							public availableLayoutSlot(): androidgraphicsRectF;
							public extractTooltipContext(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public extractTooltipContext(param0: androidgraphicsPoint): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public close(): boolean;
							public getMaxTouchDistanceTolerance(): number;
							public onOpenFailed(): void;
							public setPopupPresenter(param0: com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase): void;
							public createPresenter(param0: androidcontentContext): com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase;
							public open(param0: androidgraphicsPoint, param1: androidgraphicsPoint): boolean;
							public constructor(param0: androidcontentContext);
							public setMaxTouchDistanceTolerance(param0: number): void;
							public getApplyDefaultStyles(): boolean;
							public getPlotAreaClip(): com.telerik.android.common.math.RadRect;
							public getLastChartContext(): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public setTooltipContextNeededListener(param0: com.telerik.widget.chart.visualization.behaviors.TooltipContextNeededListener): void;
						}
					}
				}
			}
		}
	}
}

import androidosHandler = android.os.Handler;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartScaleGestureDetector {
							public getCurrentSpanX(): number;
							public getEventTime(): number;
							public getScaleFactor(): number;
							public getPreviousSpan(): number;
							public getPreviousSpanY(): number;
							public isInProgress(): boolean;
							public constructor(param0: androidcontentContext, param1: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.OnScaleGestureListener, param2: androidosHandler);
							public getCurrentSpanY(): number;
							public isQuickScaleEnabled(): boolean;
							public getFocusY(): number;
							public getCurrentSpan(): number;
							public getTimeDelta(): number;
							public setQuickScaleEnabled(param0: boolean): void;
							public getPreviousSpanX(): number;
							public getFocusX(): number;
							public onTouchEvent(param0: androidviewMotionEvent): boolean;
							public constructor(param0: androidcontentContext, param1: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.OnScaleGestureListener);
						}
						export module ChartScaleGestureDetector {
							export class OnScaleGestureListener {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector$OnScaleGestureListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onScale(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
									onScaleBegin(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
									onScaleEnd(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): void;
								});
								public onScale(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
								public onScaleBegin(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
								public onScaleEnd(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): void;
							}
							export class SimpleOnScaleGestureListener {
								public onScale(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
								public constructor();
								public onScaleBegin(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
								public onScaleEnd(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartSelectionChangeListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectable.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartSelectionBehavior extends com.telerik.widget.chart.visualization.behaviors.ChartBehavior {
							public constructor();
							public onTap(param0: androidviewMotionEvent): boolean;
							public selectedSeries(): javalangIterable<javalangObject>;
							public selectedDataPoints(): javalangIterable<javalangObject>;
							public setSeriesSelectionMode(param0: com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode): void;
							public selectSeries(param0: com.telerik.widget.chart.visualization.common.ChartSeries): com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext;
							public getDataPointsSelectionMode(): com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode;
							public getSeriesSelectionMode(): com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode;
							public selectDataPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext;
							public select(param0: com.telerik.widget.primitives.legend.LegendSelectable): com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext;
							public setSelectionChangeListener(param0: com.telerik.widget.chart.visualization.behaviors.ChartSelectionChangeListener): void;
							public onDetached(): void;
							public setDataPointsSelectionMode(param0: com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartSelectionChangeListener {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.visualization.behaviors.ChartSelectionChangeListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onSelectionChanged(param0: com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext): void;
							});
							public onSelectionChanged(param0: com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartSelectionBehavior.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartSelectionContext {
							public previousSelection(): com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext;
							public deselectedDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							public constructor(param0: com.telerik.widget.chart.visualization.behaviors.ChartSelectionBehavior, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint, param2: com.telerik.widget.chart.engine.dataPoints.DataPoint, param3: com.telerik.widget.chart.visualization.common.ChartSeries, param4: com.telerik.widget.chart.visualization.common.ChartSeries, param5: com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext);
							public selectedSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
							public selectionBehavior(): com.telerik.widget.chart.visualization.behaviors.ChartSelectionBehavior;
							public selectedDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							public deselectedSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartSelectionMode {
							public static NONE: com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode;
							public static SINGLE: com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode;
							public static MULTIPLE: com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode;
							public static values(): native.Array<com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode>;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.behaviors.ChartSelectionMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartTooltipBehavior extends com.telerik.widget.chart.visualization.behaviors.ChartPopupBehavior {
							public static BACKGROUND_PROPERTY_KEY: number;
							public static PADDING_PROPERTY_KEY: number;
							public static CATEGORY_COLOR_PROPERTY_KEY: number;
							public static VALUE_COLOR_PROPERTY_KEY: number;
							public static CATEGORY_SIZE_PROPERTY_KEY: number;
							public static VALUE_SIZE_PROPERTY_KEY: number;
							public triggerMode: com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode;
							public rawOffset(): androidgraphicsPoint;
							public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getValueTextColor(): number;
							public getCategoryTextColor(): number;
							public setContentAdapter(param0: com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter): void;
							public contentAdapter(): com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter;
							public desiredPopupLocation(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): androidgraphicsPoint;
							public reset(): void;
							public getPadding(): number;
							public getTooltipData(param0: javalangObject): native.Array<javalangObject>;
							public getTriggerMode(): com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode;
							public setCategoryTextColor(param0: number): void;
							public setPadding(param0: number): void;
							public setCategoryTextSize(param0: number): void;
							public getPaletteFamilyName(): string;
							public setBackgroundColor(param0: number): void;
							public alignTooltipVertically(): boolean;
							public onHold(param0: androidviewMotionEvent): boolean;
							public getBackgroundColor(): number;
							public constructor();
							public onDrag(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: com.telerik.android.common.math.RadSize, param3: boolean): boolean;
							public getValueTextSize(): number;
							public setValueTextColor(param0: number): void;
							public availableLayoutSlot(): androidgraphicsRectF;
							public onTap(param0: androidviewMotionEvent): boolean;
							public onDoubleTap(param0: androidviewMotionEvent): boolean;
							public onOpenFailed(): void;
							public createPresenter(param0: androidcontentContext): com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase;
							public getCategoryTextSize(): number;
							public constructor(param0: androidcontentContext);
							public setValueTextSize(param0: number): void;
							public onPinch(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector, param1: androidviewMotionEvent): boolean;
							public setTriggerMode(param0: com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode): void;
							public getPlotAreaClip(): com.telerik.android.common.math.RadRect;
						}
					}
				}
			}
		}
	}
}

import androidwidgetTextView = android.widget.TextView;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.CategoricalDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.OhlcDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.PieDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.RangeDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.ScatterDataPoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartTooltipContentAdapter {
							public applyDefaultStyles: boolean;
							public context: androidcontentContext;
							public tooltipContentId: number;
							public valueTextSize: number;
							public categoryTextSize: number;
							public valueTextColor: number;
							public categoryTextColor: number;
							public paddingLeft: number;
							public paddingTop: number;
							public paddingRight: number;
							public paddingBottom: number;
							public backgroundColor: number;
							public valueToStringConverter: com.telerik.android.common.Function;
							public categoryToStringConverter: com.telerik.android.common.Function;
							public getValueTextColor(): number;
							public getCategoryToStringConverter(): com.telerik.android.common.Function;
							public popupContent(): androidviewView;
							public getCategoryTextColor(): number;
							public extractCategory(param0: javalangObject): string;
							public setCategoryTextColor(param0: number): void;
							public initCategoricalPointView(param0: androidwidgetTextView, param1: androidwidgetTextView, param2: com.telerik.widget.chart.engine.dataPoints.CategoricalDataPoint): void;
							public setPadding(param0: number): void;
							public setCategoryTextSize(param0: number): void;
							public setBackgroundColor(param0: number): void;
							public constructor(param0: androidcontentContext, param1: number);
							public getTooltipContent(): number;
							public setCategoryToStringConverter(param0: com.telerik.android.common.Function): void;
							public getBackgroundColor(): number;
							public scatterBubbleContent(): androidviewView;
							public initRangePointView(param0: androidwidgetTextView, param1: androidwidgetTextView, param2: com.telerik.widget.chart.engine.dataPoints.RangeDataPoint): void;
							public ohlcContent(): androidviewView;
							public setApplyDefaultStyles(param0: boolean): void;
							public getOhlcContent(param0: com.telerik.widget.chart.engine.dataPoints.OhlcDataPoint): androidviewView;
							public setTooltipContent(param0: number): void;
							public setValueTextColor(param0: number): void;
							public getValueTextSize(): number;
							public setValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public getIsApplyDefaultStyles(): boolean;
							public scatterContent(): androidviewView;
							public getCategoryTextSize(): number;
							public constructor(param0: androidcontentContext);
							public getView(param0: native.Array<javalangObject>): androidviewView;
							public getValueToStringConverter(): com.telerik.android.common.Function;
							public initPiePointView(param0: androidwidgetTextView, param1: com.telerik.widget.chart.engine.dataPoints.PieDataPoint): void;
							public setValueTextSize(param0: number): void;
							public extractValue(param0: javalangObject): string;
							public getScatterContent(param0: com.telerik.widget.chart.engine.dataPoints.ScatterDataPoint): androidviewView;
							public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartDataContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.TrackBallHitTestMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.TrackBallSnapMode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartTrackBallBehavior extends com.telerik.widget.chart.visualization.behaviors.ChartPopupBehavior {
							public static BACKGROUND_PROPERTY_KEY: number;
							public static PADDING_PROPERTY_KEY: number;
							public static CATEGORY_COLOR_PROPERTY_KEY: number;
							public static VALUE_COLOR_PROPERTY_KEY: number;
							public static CATEGORY_SIZE_PROPERTY_KEY: number;
							public static VALUE_SIZE_PROPERTY_KEY: number;
							public rawOffset(): androidgraphicsPoint;
							public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getValueTextColor(): number;
							public setShowIntersectionPoints(param0: boolean): void;
							public onUp(param0: androidviewMotionEvent): boolean;
							public getCategoryTextColor(): number;
							public getCustomContentProvider(): com.telerik.widget.chart.visualization.behaviors.ChartTrackballContentAdapter.ChartTrackBallContentProvider;
							public setShowTrackInfo(param0: boolean): void;
							public setContentAdapter(param0: com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter): void;
							public contentAdapter(): com.telerik.android.primitives.widget.tooltip.contracts.TooltipContentAdapter;
							public desiredPopupLocation(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): androidgraphicsPoint;
							public getPadding(): number;
							public getTooltipData(param0: javalangObject): native.Array<javalangObject>;
							public setCategoryTextColor(param0: number): void;
							public setPadding(param0: number): void;
							public setCategoryTextSize(param0: number): void;
							public setBackgroundColor(param0: number): void;
							public getPaletteFamilyName(): string;
							public alignTooltipVertically(): boolean;
							public getBackgroundColor(): number;
							public onHold(param0: androidviewMotionEvent): boolean;
							public validateDataContext(param0: com.telerik.widget.chart.visualization.behaviors.ChartDataContext): boolean;
							public constructor();
							public onDrag(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: com.telerik.android.common.math.RadSize, param3: boolean): boolean;
							public getValueTextSize(): number;
							public setValueTextColor(param0: number): void;
							public availableLayoutSlot(): androidgraphicsRectF;
							public getShowTrackInfo(): boolean;
							public setCustomContentProvider(param0: com.telerik.widget.chart.visualization.behaviors.ChartTrackballContentAdapter.ChartTrackBallContentProvider): void;
							public getPointHitTestMode(): com.telerik.widget.chart.visualization.behaviors.TrackBallHitTestMode;
							public createPresenter(param0: androidcontentContext): com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase;
							public getCategoryTextSize(): number;
							public getRelatedDataPoints(): javautilList<javalangObject>;
							public constructor(param0: androidcontentContext);
							public setValueTextSize(param0: number): void;
							public getShowIntersectionPoints(): boolean;
							public setPointHitTestMode(param0: com.telerik.widget.chart.visualization.behaviors.TrackBallHitTestMode): void;
							public getContext(param0: androidgraphicsPoint): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public setSnapMode(param0: com.telerik.widget.chart.visualization.behaviors.TrackBallSnapMode): void;
							public getPlotAreaClip(): com.telerik.android.common.math.RadRect;
							public getSnapMode(): com.telerik.widget.chart.visualization.behaviors.TrackBallSnapMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.CategoricalDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.OhlcDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.RangeDataPoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartTrackballContentAdapter extends com.telerik.widget.chart.visualization.behaviors.ChartTooltipContentAdapter {
							public setApplyDefaultStyles(param0: boolean): void;
							public getCategoryToStringConverter(): com.telerik.android.common.Function;
							public popupContent(): androidviewView;
							public createOhlcDataPointView(param0: com.telerik.widget.chart.engine.dataPoints.OhlcDataPoint): androidviewView;
							public setValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public setCustomContentProvider(param0: com.telerik.widget.chart.visualization.behaviors.ChartTrackballContentAdapter.ChartTrackBallContentProvider): void;
							public getCustomContentProvider(): com.telerik.widget.chart.visualization.behaviors.ChartTrackballContentAdapter.ChartTrackBallContentProvider;
							public getIsApplyDefaultStyles(): boolean;
							public constructor(param0: androidcontentContext);
							public getView(param0: native.Array<javalangObject>): androidviewView;
							public getValueToStringConverter(): com.telerik.android.common.Function;
							public createRangeDataPointView(param0: com.telerik.widget.chart.engine.dataPoints.RangeDataPoint): androidviewView;
							public createCategoricalDataPointView(param0: com.telerik.widget.chart.engine.dataPoints.CategoricalDataPoint): androidviewView;
							public constructor(param0: androidcontentContext, param1: number);
							public setCategoryToStringConverter(param0: com.telerik.android.common.Function): void;
							public getViewForDataPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): androidviewView;
							public updateCategoryText(param0: androidwidgetTextView, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
						}
						export module ChartTrackballContentAdapter {
							export class ChartTrackBallContentProvider {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.visualization.behaviors.ChartTrackballContentAdapter$ChartTrackBallContentProvider interface with the provided implementation.
								 */
								public constructor(implementation: {
									resolveContentForDataPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
									resolveCustomViewForDataPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): androidviewView;
								});
								public resolveContentForDataPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
								public resolveCustomViewForDataPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): androidviewView;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class ChartZoomStrategy {
							public static IMMEDIATE: com.telerik.widget.chart.visualization.behaviors.ChartZoomStrategy;
							public static DEFERRED: com.telerik.widget.chart.visualization.behaviors.ChartZoomStrategy;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.behaviors.ChartZoomStrategy;
							public static values(): native.Array<com.telerik.widget.chart.visualization.behaviors.ChartZoomStrategy>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class DataPointInfo {
							public constructor();
							public getDisplayHeader(): javalangObject;
							public setSeriesModel(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel): void;
							public setDisplayHeader(param0: javalangObject): void;
							public getDisplayContent(): javalangObject;
							public setContainsTouchLocation(param0: boolean): void;
							public setDataPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public getPriority(): number;
							public setPriority(param0: number): void;
							public getSeriesModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
							public setDisplayContent(param0: javalangObject): void;
							public getContainsTouchLocation(): boolean;
							public getDataPoint(): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							public getDistanceToTouchLocation(): number;
							public setDistanceToTouchLocation(param0: number): void;
							public series(): com.telerik.widget.chart.visualization.common.ChartSeries;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class PanZoomListener {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.visualization.behaviors.PanZoomListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onPan(param0: number, param1: number): void;
								onZoom(param0: number, param1: number): void;
							});
							public onZoom(param0: number, param1: number): void;
							public onPan(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartDataContext.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class TooltipContextNeededEventArgs {
							public getContext(): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public getDefaultContext(): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public setContext(param0: com.telerik.widget.chart.visualization.behaviors.ChartDataContext): void;
							public constructor(param0: com.telerik.widget.chart.visualization.behaviors.ChartDataContext);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartDataContext.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class TooltipContextNeededEventArguments {
							public getContext(): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public getDefaultContext(): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public setContext(param0: com.telerik.widget.chart.visualization.behaviors.ChartDataContext): void;
							public constructor(param0: com.telerik.widget.chart.visualization.behaviors.ChartDataContext);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.behaviors.TooltipContextNeededEventArgs.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class TooltipContextNeededListener {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.visualization.behaviors.TooltipContextNeededListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onContextNeeded(param0: com.telerik.widget.chart.visualization.behaviors.TooltipContextNeededEventArgs): void;
							});
							public onContextNeeded(param0: com.telerik.widget.chart.visualization.behaviors.TooltipContextNeededEventArgs): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class TooltipTriggerMode {
							public static TAP: com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode;
							public static HOLD: com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode;
							public static NONE: com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode;
							public static values(): native.Array<com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode>;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.behaviors.TooltipTriggerMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class TrackBallHitTestMode {
							public static LOGICAL: com.telerik.widget.chart.visualization.behaviors.TrackBallHitTestMode;
							public static PHYSICAL: com.telerik.widget.chart.visualization.behaviors.TrackBallHitTestMode;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.behaviors.TrackBallHitTestMode;
							public static values(): native.Array<com.telerik.widget.chart.visualization.behaviors.TrackBallHitTestMode>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export class TrackBallSnapMode {
							public static NONE: com.telerik.widget.chart.visualization.behaviors.TrackBallSnapMode;
							public static CLOSEST_POINT: com.telerik.widget.chart.visualization.behaviors.TrackBallSnapMode;
							public static ALL_CLOSE_POINTS: com.telerik.widget.chart.visualization.behaviors.TrackBallSnapMode;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.behaviors.TrackBallSnapMode;
							public static values(): native.Array<com.telerik.widget.chart.visualization.behaviors.TrackBallSnapMode>;
						}
					}
				}
			}
		}
	}
}

import androidsupportv4viewViewPropertyAnimatorCompat = android.support.v4.view.ViewPropertyAnimatorCompat;
import androidviewanimationInterpolator = android.view.animation.Interpolator;
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export class ChartAnimation {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation interface with the provided implementation.
								 */
								public constructor(implementation: {
									start(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): androidsupportv4viewViewPropertyAnimatorCompat;
									setInitialValues(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
									setDuration(param0: number): void;
									getDuration(): number;
									setInterpolator(param0: androidviewanimationInterpolator): void;
									getInterpolator(): androidviewanimationInterpolator;
									setInitialDelay(param0: number): void;
									getInitialDelay(): number;
									getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
									addAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
									removeAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								});
								public addAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public setInitialValues(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
								public getDuration(): number;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public removeAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public setDuration(param0: number): void;
								public setInitialDelay(param0: number): void;
								public getInitialDelay(): number;
								public getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
								public start(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): androidsupportv4viewViewPropertyAnimatorCompat;
								public getInterpolator(): androidviewanimationInterpolator;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export abstract class ChartAnimationBase {
								public getDuration(): number;
								public setInitialValues(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
								public removeAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public onAnimationFinished(): void;
								public constructor();
								public start(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): androidsupportv4viewViewPropertyAnimatorCompat;
								public addAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setDuration(param0: number): void;
								public setInitialDelay(param0: number): void;
								public getInitialDelay(): number;
								public getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
								public animateViewCore(param0: androidsupportv4viewViewPropertyAnimatorCompat): void;
								public run(): void;
								public getInterpolator(): androidviewanimationInterpolator;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export class ChartAnimationFinishedListener {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onAnimationFinished(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation, param1: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
								});
								public onAnimationFinished(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation, param1: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationSequenceMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export class ChartAnimationGroup {
								public setInitialValues(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
								public getDuration(): number;
								public getChildDuration(): number;
								public removeAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public start(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): androidsupportv4viewViewPropertyAnimatorCompat;
								public addAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
								public removeAnimation(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setDuration(param0: number): void;
								public setInitialDelay(param0: number): void;
								public setSequenceMode(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationSequenceMode): void;
								public getInitialDelay(): number;
								public getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
								public run(): void;
								public addAnimation(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimation): void;
								public getInterpolator(): androidviewanimationInterpolator;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export class ChartAnimationSequenceMode {
								public static CONCURRENT: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationSequenceMode;
								public static SEQUENTIAL: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationSequenceMode;
								public static values(): native.Array<com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationSequenceMode>;
								public static valueOf(param0: string): com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationSequenceMode;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export class ChartFadeAnimation extends com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationBase {
								public getStartOpacity(): number;
								public setInitialValues(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
								public getDuration(): number;
								public removeAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public constructor();
								public start(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): androidsupportv4viewViewPropertyAnimatorCompat;
								public addAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setStartOpacity(param0: number): void;
								public setDuration(param0: number): void;
								public setInitialDelay(param0: number): void;
								public getInitialDelay(): number;
								public getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
								public animateViewCore(param0: androidsupportv4viewViewPropertyAnimatorCompat): void;
								public getInterpolator(): androidviewanimationInterpolator;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export class ChartRotateAnimation extends com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationBase {
								public setInitialValues(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
								public getDuration(): number;
								public removeAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public getPivotY(): number;
								public constructor();
								public setPivotX(param0: number): void;
								public setPivotY(param0: number): void;
								public getStartAngle(): number;
								public start(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): androidsupportv4viewViewPropertyAnimatorCompat;
								public addAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setDuration(param0: number): void;
								public setInitialDelay(param0: number): void;
								public getInitialDelay(): number;
								public getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
								public animateViewCore(param0: androidsupportv4viewViewPropertyAnimatorCompat): void;
								public setStartAngle(param0: number): void;
								public getPivotX(): number;
								public getInterpolator(): androidviewanimationInterpolator;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export class ChartScaleAnimation extends com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationBase {
								public setInitialValues(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
								public getDuration(): number;
								public removeAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public getPivotY(): number;
								public constructor();
								public setPivotX(param0: number): void;
								public setPivotY(param0: number): void;
								public getStartScaleX(): number;
								public start(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): androidsupportv4viewViewPropertyAnimatorCompat;
								public addAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setDuration(param0: number): void;
								public setStartScaleX(param0: number): void;
								public setStartScaleY(param0: number): void;
								public setInitialDelay(param0: number): void;
								public getInitialDelay(): number;
								public getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
								public animateViewCore(param0: androidsupportv4viewViewPropertyAnimatorCompat): void;
								public getPivotX(): number;
								public getStartScaleY(): number;
								public getInterpolator(): androidviewanimationInterpolator;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module animations {
							export class ChartTranslateAnimation extends com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationBase {
								public setInitialValues(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): void;
								public getDuration(): number;
								public removeAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public constructor();
								public getStartY(): number;
								public start(param0: com.telerik.widget.chart.visualization.behaviors.views.SeriesAnimationView): androidsupportv4viewViewPropertyAnimatorCompat;
								public getStartX(): number;
								public addAnimationFinishedListener(param0: com.telerik.widget.chart.visualization.behaviors.animations.ChartAnimationFinishedListener): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setDuration(param0: number): void;
								public setInitialDelay(param0: number): void;
								public getInitialDelay(): number;
								public getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
								public setStartX(param0: number): void;
								public animateViewCore(param0: androidsupportv4viewViewPropertyAnimatorCompat): void;
								public setStartY(param0: number): void;
								public getInterpolator(): androidviewanimationInterpolator;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartPanAndZoomBehavior.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module views {
							export class DeferredZoomPresenter extends com.telerik.android.common.PropertyManager implements com.telerik.android.primitives.widget.tooltip.contracts.DrawListener {
								public static FILL_COLOR_PROPERTY_KEY: number;
								public static STROKE_COLOR_PROPERTY_KEY: number;
								public static STROKE_WIDTH_PROPERTY_KEY: number;
								public getOwner(): com.telerik.widget.chart.visualization.behaviors.ChartPanAndZoomBehavior;
								public setOwner(param0: com.telerik.widget.chart.visualization.behaviors.ChartPanAndZoomBehavior): void;
								public setStrokePaint(param0: androidgraphicsPaint): void;
								public notifyDraw(param0: androidgraphicsCanvas): void;
								public setPinchPoints(param0: com.telerik.android.common.math.RadPoint, param1: com.telerik.android.common.math.RadPoint): void;
								public constructor();
								public setCanApplyPalette(param0: boolean): void;
								public setStrokeColor(param0: number): void;
								public getZoomY(): number;
								public getStrokePaint(): androidgraphicsPaint;
								public getStrokeColor(): number;
								public getPanX(): number;
								public setStrokeWidth(param0: number): void;
								public getFillPaint(): androidgraphicsPaint;
								public setFillPaint(param0: androidgraphicsPaint): void;
								public getZoomX(): number;
								public setFillColor(param0: number): void;
								public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getFillColor(): number;
								public getCanApplyPalette(): boolean;
								public getPanY(): number;
								public getStrokeWidth(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module views {
							export class SeriesAnimationView {
								public decrementAnimationCount(): void;
								public incrementAnimationCount(): void;
								public constructor(param0: androidcontentContext, param1: com.telerik.widget.chart.visualization.common.ChartSeries);
								public onDraw(param0: androidgraphicsCanvas): void;
								public getSeries(): com.telerik.widget.chart.visualization.common.ChartSeries;
								public onMeasure(param0: number, param1: number): void;
								public getActiveAnimationCount(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module views {
							export class SeriesAnimationViewport {
								public setChart(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
								public constructor(param0: androidcontentContext);
								public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public onMeasure(param0: number, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module behaviors {
						export module views {
							export class TrackballPresenter extends com.telerik.android.primitives.widget.tooltip.views.TooltipPresenterBase {
								public getIntersectionPointPaint(): androidgraphicsPaint;
								public constructor(param0: androidcontentContext, param1: com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter, param2: number);
								public drawLine(param0: androidgraphicsCanvas): void;
								public calculateTooltipBounds(param0: androidgraphicsPoint): androidgraphicsRectF;
								public getIndicatorRadius(): number;
								public constructor(param0: androidcontentContext, param1: com.telerik.android.primitives.widget.tooltip.contracts.TooltipAdapter);
								public getLinePaint(): androidgraphicsPaint;
								public notifyDraw(param0: androidgraphicsCanvas): void;
								public setLinePaint(param0: androidgraphicsPaint): void;
								public setIntersectionPointPaint(param0: androidgraphicsPaint): void;
								public onDrawCore(param0: androidgraphicsCanvas): void;
								public openCore(param0: androidgraphicsPoint): void;
								public drawIntersectionPoints(param0: androidgraphicsCanvas): void;
								public setIndicatorRadius(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./com.telerik.android.common.ObservableCollection.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.decorations.CartesianChartGridModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.CartesianChartGrid.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.Axis.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export class CartesianChartGrid extends com.telerik.widget.chart.visualization.common.ChartElementPresenter {
							public static MAJOR_LINES_THICKNESS_PROPERTY_KEY: number;
							public static MAJOR_LINES_VISIBILITY_PROPERTY_KEY: number;
							public static STRIP_LINES_VISIBILITY_PROPERTY_KEY: number;
							public static LINE_COLOR_PROPERTY_KEY: number;
							public static VERTICAL_LINE_COLOR_PROPERTY_KEY: number;
							public static MAJOR_X_LINE_DASH_ARRAY_PROPERTY_KEY: number;
							public static MAJOR_Y_LINE_DASH_ARRAY_PROPERTY_KEY: number;
							public static MAJOR_X_LINE_RENDER_MODE_PROPERTY_KEY: number;
							public static MAJOR_Y_LINE_RENDER_MODE_PROPERTY_KEY: number;
							public grid: com.telerik.widget.chart.engine.decorations.CartesianChartGridModel;
							public getElement(): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
							public defaultPaletteFamily(): string;
							public getMajorYLinesRenderMode(): number;
							public setVerticalLineColor(param0: number): void;
							public setVerticalLineThickness(param0: number): void;
							public setHorizontalAxis(param0: com.telerik.widget.chart.visualization.common.Axis): void;
							public setMajorYLineDashArray(param0: native.Array<number>): void;
							public getYStripeBrushes(): com.telerik.android.common.ObservableCollection;
							public getMajorLinesVisibility(): number;
							public getMajorYLineDashArray(): native.Array<number>;
							public setLineThickness(param0: number): void;
							public getVerticalLineThickness(): number;
							public invalidatePalette(): void;
							public getMajorXLineDashArray(): native.Array<number>;
							public getMajorXLinesRenderMode(): number;
							public setMajorYLinesRenderMode(param0: number): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public setMajorXLinesRenderMode(param0: number): void;
							public getXStripeBrushes(): com.telerik.android.common.ObservableCollection;
							public getDefaultZIndex(): number;
							public constructor();
							public getVerticalLineColor(): number;
							public onAttached(): void;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public render(param0: androidgraphicsCanvas): void;
							public setLineColor(param0: number): void;
							public getCollectionIndex(): number;
							public getLineThickness(): number;
							public setStripLinesVisibility(param0: number): void;
							public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public setMajorXLineDashArray(param0: native.Array<number>): void;
							public getLineColor(): number;
							public setMajorLinesVisibility(param0: number): void;
							public setVerticalAxis(param0: com.telerik.widget.chart.visualization.common.Axis): void;
							public getStripLinesVisibility(): number;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
						export module CartesianChartGrid {
							export class GridLinesInfo {
								public dashArray: native.Array<number>;
								public visible: boolean;
								public renderMode: number;
								public lines: javautilArrayList<javalangObject>;
								public owner: com.telerik.widget.chart.visualization.cartesianChart.CartesianChartGrid;
								public linePaint: androidgraphicsPaint;
								public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.CartesianChartGrid, param1: com.telerik.widget.chart.visualization.cartesianChart.CartesianChartGrid);
								public drawLines(param0: androidgraphicsCanvas): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export class GridLineRenderMode {
							public static FIRST: number;
							public static INNER: number;
							public static LAST: number;
							public static FIRST_AND_INNER: number;
							public static INNER_AND_LAST: number;
							public static FIRST_AND_LAST: number;
							public static ALL: number;
							public constructor();
							public static valueOf(param0: string): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export class GridLineVisibility {
							public static NONE: number;
							public static X: number;
							public static Y: number;
							public static XY: number;
							public constructor();
							public static valueOf(param0: string): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.telerik.android.common.DataTuple.d.ts" />
/// <reference path="./com.telerik.android.common.ObservableCollection.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.CartesianChartGrid.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.CartesianAxis.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.PresenterCollection.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export class RadCartesianChartView extends com.telerik.widget.chart.visualization.common.RadChartViewBase {
							public getZoomWidth(): number;
							public getPanOffsetY(): number;
							public getHorizontalAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
							public createChartAreaModel(): com.telerik.widget.chart.engine.chartAreas.ChartAreaModel;
							public setGrid(param0: com.telerik.widget.chart.visualization.cartesianChart.CartesianChartGrid): void;
							public resolveHorizontalAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public setHorizontalAxis(param0: com.telerik.widget.chart.visualization.common.CartesianAxis): void;
							public setVerticalAxis(param0: com.telerik.widget.chart.visualization.common.CartesianAxis): void;
							public getAnnotations(): com.telerik.widget.chart.visualization.common.PresenterCollection;
							public getZoomHeight(): number;
							public getPanOffsetX(): number;
							public onScaleEnd(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
							public getVerticalAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
							public getGrid(): com.telerik.widget.chart.visualization.cartesianChart.CartesianChartGrid;
							public convertPointToData(param0: androidgraphicsPoint): com.telerik.android.common.DataTuple;
							public resolveVerticalAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
							public getViewportHeight(): number;
							public getViewportWidth(): number;
							public constructor(param0: androidcontentContext);
							public getLegendInfos(): com.telerik.android.common.ObservableCollection;
							public convertPointToData(param0: androidgraphicsPoint, param1: com.telerik.widget.chart.visualization.common.CartesianAxis, param2: com.telerik.widget.chart.visualization.common.CartesianAxis): com.telerik.android.common.DataTuple;
							public onScale(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
							public onScaleBegin(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
							public getPlotAreaClip(): com.telerik.android.common.math.RadRect;
						}
					}
				}
			}
		}
	}
}

import androidgraphicsTypeface = android.graphics.Typeface;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module axes {
							export class CategoricalAxis extends com.telerik.widget.chart.visualization.common.CartesianAxis {
								public getMajorTickInterval(): number;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createModel(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getLabelSize(): number;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setMajorTickInterval(param0: number): void;
								public getDataPointsForValue(param0: javalangObject): javautilList<javalangObject>;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public getLabelTextColor(): number;
								public getCollectionIndex(): number;
								public getLabelFormat(): string;
								public setPlotMode(param0: com.telerik.widget.chart.engine.axes.common.AxisPlotMode): void;
								public getGapLength(): number;
								public setGapLength(param0: number): void;
								public getPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public getLabelFontStyle(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public getLabelMargin(): number;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public invalidatePalette(): void;
								public constructor();
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public setLabelTextColor(param0: number): void;
								public getLabelFont(): androidgraphicsTypeface;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.DateTimeComponent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module axes {
							export class DateTimeCategoricalAxis extends com.telerik.widget.chart.visualization.cartesianChart.axes.CategoricalAxis {
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createModel(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getLabelSize(): number;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public getDateTimeFormat(): javatextDateFormat;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public getLabelTextColor(): number;
								public getCollectionIndex(): number;
								public getLabelFormat(): string;
								public setDateTimeComponent(param0: com.telerik.widget.chart.engine.axes.common.DateTimeComponent): void;
								public getDateFormat(): javatextDateFormat;
								public getLabelFontStyle(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public getLabelMargin(): number;
								public setDateTimeFormat(param0: javatextDateFormat): void;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public invalidatePalette(): void;
								public constructor();
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public setLabelTextColor(param0: number): void;
								public getDateTimeComponent(): com.telerik.widget.chart.engine.axes.common.DateTimeComponent;
								public getLabelFont(): androidgraphicsTypeface;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.Function2.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisPlotMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.TimeInterval.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module axes {
							export class DateTimeContinuousAxis extends com.telerik.widget.chart.visualization.common.CartesianAxis {
								public getMajorStepUnit(): com.telerik.widget.chart.engine.axes.common.TimeInterval;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createModel(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getLabelSize(): number;
								public setMaximum(param0: javautilCalendar): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public getDateTimeFormat(): javatextDateFormat;
								public setMajorStepUnit(param0: com.telerik.widget.chart.engine.axes.common.TimeInterval): void;
								public getDateComparer(): com.telerik.android.common.Function2;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getSourceDateTimeFormat(): javatextDateFormat;
								public getDataPointsForValue(param0: javalangObject): javautilList<javalangObject>;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public getLabelTextColor(): number;
								public getCollectionIndex(): number;
								public getLabelFormat(): string;
								public setDateComparer(param0: com.telerik.android.common.Function2): void;
								public getGapLength(): number;
								public setPlotMode(param0: com.telerik.widget.chart.engine.axes.common.AxisPlotMode): void;
								public getMaximum(): javautilCalendar;
								public setSourceDateTimeFormat(param0: javatextDateFormat): void;
								public setGapLength(param0: number): void;
								public getActualRange(): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
								public setMaximumTicks(param0: number): void;
								public getPlotMode(): com.telerik.widget.chart.engine.axes.common.AxisPlotMode;
								public getLabelFontStyle(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public getLabelMargin(): number;
								public setDateTimeFormat(param0: javatextDateFormat): void;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public setMajorStep(param0: number): void;
								public getMaximumTicks(): number;
								public invalidatePalette(): void;
								public constructor();
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public setLabelTextColor(param0: number): void;
								public setMinimum(param0: javautilCalendar): void;
								public getMinimum(): javautilCalendar;
								public getLabelFont(): androidgraphicsTypeface;
								public getMajorStep(): number;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module axes {
							export class LinearAxis extends com.telerik.widget.chart.visualization.cartesianChart.axes.NumericalAxis {
								public getLabelFontStyle(): number;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public createModel(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getLabelSize(): number;
								public getLabelMargin(): number;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setMajorStep(param0: number): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public getLabelTextColor(): number;
								public getCollectionIndex(): number;
								public getLabelFormat(): string;
								public setLabelTextColor(param0: number): void;
								public getLabelFont(): androidgraphicsTypeface;
								public getMajorStep(): number;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module axes {
							export class LogarithmicAxis extends com.telerik.widget.chart.visualization.cartesianChart.axes.NumericalAxis {
								public setLogarithmBase(param0: number): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createModel(): com.telerik.widget.chart.engine.axes.AxisModel;
								public getLabelSize(): number;
								public setExponentStep(param0: number): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public getLabelTextColor(): number;
								public getCollectionIndex(): number;
								public getLabelFormat(): string;
								public getLabelFontStyle(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public getLabelMargin(): number;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public invalidatePalette(): void;
								public constructor();
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public setLabelTextColor(param0: number): void;
								public getExponentStep(): number;
								public getLabelFont(): androidgraphicsTypeface;
								public getLogarithmBase(): number;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.continuous.ValueRange.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module axes {
							export abstract class NumericalAxis extends com.telerik.widget.chart.visualization.common.CartesianAxis {
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public getLabelSize(): number;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setRangeExtendDirection(param0: number): void;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getDataPointsForValue(param0: javalangObject): javautilList<javalangObject>;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public getLabelTextColor(): number;
								public getCollectionIndex(): number;
								public getLabelFormat(): string;
								public getMaximum(): number;
								public setMinimum(param0: number): void;
								public getRangeExtendDirection(): number;
								public getActualRange(): com.telerik.widget.chart.engine.axes.continuous.ValueRange;
								public getLabelFontStyle(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public getLabelMargin(): number;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public getDesiredTickCount(): number;
								public invalidatePalette(): void;
								public constructor();
								public getMinimum(): number;
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public setLabelTextColor(param0: number): void;
								public setDesiredTickCount(param0: number): void;
								public getLabelFont(): androidgraphicsTypeface;
								public setMaximum(param0: number): void;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class AdaptiveMovingAverageKaufmanIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public getFastPeriod(): number;
								public setFastPeriod(param0: number): void;
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public setSlowPeriod(param0: number): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public getSlowPeriod(): number;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class AverageTrueRangeIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.HighLowClosePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class BarIndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValueIndicatorBase {
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public realizedDataPoints(): javautilList<javalangObject>;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPointCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.Axis.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class BollingerBandsIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public standardDeviations: number;
								public lowerBandRenderer: com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
								public elements: javautilList<javalangObject>;
								public getLowerBandStrokeWidth(): number;
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public drawCore(param0: androidgraphicsCanvas): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public lowerBandDataPoints(): com.telerik.widget.chart.engine.dataPoints.DataPointCollection;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getCollectionIndex(): number;
								public onChartAxisChanged(param0: com.telerik.widget.chart.visualization.common.Axis, param1: com.telerik.widget.chart.visualization.common.Axis): void;
								public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
								public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getStandardDeviations(): number;
								public invalidatePalette(): void;
								public constructor();
								public onAttached(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
								public onModelAttached(): void;
								public getLowerBandStrokeColor(): number;
								public setStandardDeviations(param0: number): void;
								public lowerBandModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
								public setLowerBandStrokeColor(param0: number): void;
								public setLowerBandStrokeWidth(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class CommodityChannelIndexIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.HighLowClosePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class ExponentialMovingAverageIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class HighLowCloseIndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.indicators.HighLowIndicatorBase {
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public initDataBinding(): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getCloseBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public setCloseBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class HighLowClosePeriodIndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.indicators.HighLowCloseIndicatorBase {
								public period: number;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getPeriod(): number;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setPeriod(param0: number): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class HighLowIndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.indicators.LineIndicatorBase {
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public getHighBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public getLowBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public initDataBinding(): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public setLowBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setHighBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPointCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.CategoricalSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.Axis.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class IndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.series.CartesianSeries {
								public static FINANCIAL_INDICATOR_Z_INDEX: number;
								public categoryBinding: com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public initDataBinding(): void;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getDataPoints(): com.telerik.widget.chart.engine.dataPoints.DataPointCollection;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getCollectionIndex(): number;
								public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
								public createIndicatorModel(): com.telerik.widget.chart.engine.series.CategoricalSeriesModel;
								public onChartAxisChanged(param0: com.telerik.widget.chart.visualization.common.Axis, param1: com.telerik.widget.chart.visualization.common.Axis): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
								public setCategoryBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public model(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
								public getDefaultZIndex(): number;
								public invalidatePalette(): void;
								public constructor();
								public onAttached(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
								public getCategoryBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class LineIndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.indicators.IndicatorBase {
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public drawCore(param0: androidgraphicsCanvas): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public getDashArray(): native.Array<number>;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setStrokeColor(param0: number): void;
								public getLegendFillColor(): number;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getStrokeColor(): number;
								public getCollectionIndex(): number;
								public getRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
								public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
								public setStrokeThickness(param0: number): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public getLegendStrokeColor(): number;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
								public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
								public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
								public defaultPaletteFamily(): string;
								public getStrokeThickness(): number;
								public invalidatePalette(): void;
								public constructor();
								public onAttached(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
								public setDashArray(param0: native.Array<number>): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPointCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.Axis.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class MacdIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ShortLongPeriodIndicatorBase {
								public signalDataPoints(): com.telerik.widget.chart.engine.dataPoints.DataPointCollection;
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public getSignalPaint(): androidgraphicsPaint;
								public setSignalPaint(param0: androidgraphicsPaint): void;
								public signalModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public drawCore(param0: androidgraphicsCanvas): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setSignalPeriod(param0: number): void;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setStrokeColor(param0: number): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getStrokeColor(): number;
								public getCollectionIndex(): number;
								public onChartAxisChanged(param0: com.telerik.widget.chart.visualization.common.Axis, param1: com.telerik.widget.chart.visualization.common.Axis): void;
								public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
								public setStrokeThickness(param0: number): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public getSignalPeriod(): number;
								public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
								public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
								public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
								public getStrokeThickness(): number;
								public invalidatePalette(): void;
								public constructor();
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
								public onModelAttached(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class ModifiedExponentialMovingAverageIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ExponentialMovingAverageIndicator {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class ModifiedMovingAverageIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class MomentumIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class MovingAverageIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class OscillatorIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ShortLongPeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class RateOfChangeIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.MomentumIndicator {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class RaviIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ShortLongPeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class RelativeMomentumIndexIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public momentumPeriod: number;
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public getMomentumPeriod(): number;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setMomentumPeriod(param0: number): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class RelativeStrengthIndexIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class ShortLongPeriodIndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValueIndicatorBase {
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public setLongPeriod(param0: number): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getLongPeriod(): number;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public getShortPeriod(): number;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
								public setShortPeriod(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPointCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.Axis.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class StochasticFastIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.HighLowCloseIndicatorBase {
								public mainPeriod: number;
								public signalPeriod: number;
								public signalRenderer: com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
								public toString(): string;
								public signalDataPoints(): com.telerik.widget.chart.engine.dataPoints.DataPointCollection;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public signalModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public drawCore(param0: androidgraphicsCanvas): void;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setSignalPeriod(param0: number): void;
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getSignalStrokeWidth(): number;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getCollectionIndex(): number;
								public getElements(): javautilList<javalangObject>;
								public onChartAxisChanged(param0: com.telerik.widget.chart.visualization.common.Axis, param1: com.telerik.widget.chart.visualization.common.Axis): void;
								public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
								public getMainPeriod(): number;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSignalStroke(param0: number): void;
								public getSignalPeriod(): number;
								public getSignalStrokeColor(): number;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
								public setSignalStrokeWidth(param0: number): void;
								public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setMainPeriod(param0: number): void;
								public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
								public invalidatePalette(): void;
								public constructor();
								public onAttached(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
								public onModelAttached(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class StochasticIndicatorDataSourceBase extends com.telerik.widget.chart.engine.databinding.datasources.financial.HighLowCloseIndicatorDataSourceBase {
								public setMainPeriod(param0: number): void;
								public constructor(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel);
								public getMainPeriod(): number;
								public setSignalPeriod(param0: number): void;
								public getSignalPeriod(): number;
								public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class StochasticSlowIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.StochasticFastIndicator {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public getSlowingPeriod(): number;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public setSlowingPeriod(param0: number): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class TrixIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class TrueRangeIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.HighLowCloseIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class UltimateOscillatorIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.HighLowClosePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public setPeriod3(param0: number): void;
								public setPeriod2(param0: number): void;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getPeriod3(): number;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public getPeriod2(): number;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class ValueIndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.indicators.LineIndicatorBase {
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public getValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public initDataBinding(): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public setValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export abstract class ValuePeriodIndicatorBase extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValueIndicatorBase {
								public period: number;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getPeriod(): number;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setPeriod(param0: number): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module indicators {
							export class WeightedMovingAverageIndicator extends com.telerik.widget.chart.visualization.cartesianChart.indicators.ValuePeriodIndicatorBase {
								public toString(): string;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.CartesianAxis.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export abstract class CartesianSeries extends com.telerik.widget.chart.visualization.common.PointTemplateSeries {
								public getHorizontalAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
								public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public invalidatePalette(): void;
								public constructor();
								public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
								public onAttached(): void;
								public setIsSelected(param0: boolean): void;
								public onDataBindingComplete(): void;
								public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
								public getCollectionIndex(): number;
								public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
								public setVerticalAxis(param0: com.telerik.widget.chart.visualization.common.CartesianAxis): void;
								public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
								public getVerticalAxis(): com.telerik.widget.chart.visualization.common.CartesianAxis;
								public chartAxisChanged(param0: com.telerik.widget.chart.visualization.common.CartesianAxis, param1: com.telerik.widget.chart.visualization.common.CartesianAxis): void;
								public getIsSelected(): boolean;
								public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								public setHorizontalAxis(param0: com.telerik.widget.chart.visualization.common.CartesianAxis): void;
								public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							}
						}
					}
				}
			}
		}
	}
}

import androidgraphicsPointF = android.graphics.PointF;
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class AreaSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CategoricalStrokedSeries implements com.telerik.widget.chart.visualization.common.FilledSeries {
									public static FILL_COLOR_PROPERTY_KEY: number;
									public getIsSelected(): boolean;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setFillColor(param0: number): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
									public constructor();
									public getLegendFillColor(): number;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public defaultPaletteFamily(): string;
									public getFillColor(): number;
									public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: javalangIterable<javalangObject>);
									public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public hitTest(param0: androidgraphicsPointF): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

import androidgraphicsShader = android.graphics.Shader;
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.PathEffect.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.DataPointInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class BarSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CategoricalSeries {
									public static FILL_COLOR_PROPERTY_KEY: number;
									public static STROKE_COLOR_PROPERTY_KEY: number;
									public static STROKE_WIDTH_PROPERTY_KEY: number;
									public getIsSelected(): boolean;
									public findClosestPoint(param0: androidgraphicsPoint): com.telerik.widget.chart.visualization.behaviors.DataPointInfo;
									public setFillColor(param0: number): void;
									public setMinBarWidth(param0: number): void;
									public setCanApplyPalette(param0: boolean): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public setMaxBarWidth(param0: number): void;
									public setAreBarsRounded(param0: boolean): void;
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getStrokeEffect(): androidgraphicsPathEffect;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public setRoundBarsRadius(param0: number): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public getFillColor(): number;
									public getFillPaint(): androidgraphicsPaint;
									public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getStrokePaint(): androidgraphicsPaint;
									public applyPaletteToDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.widget.palettes.PaletteEntry): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: javalangIterable<javalangObject>);
									public setStrokeColor(param0: number): void;
									public getLegendStrokeColor(): number;
									public getFillShader(): androidgraphicsShader;
									public getStrokeWidth(): number;
									public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getMaxBarWidth(): number;
									public getRoundBarsRadius(): number;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getCollectionIndex(): number;
									public constructor();
									public getLegendFillColor(): number;
									public invalidatePalette(): void;
									public setData(param0: javalangIterable<javalangObject>): void;
									public defaultPaletteFamily(): string;
									public setFillShader(param0: androidgraphicsShader): void;
									public getAreBarsRounded(): boolean;
									public clearPaletteFromDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getMinBarWidth(): number;
									public setStrokeShader(param0: androidgraphicsShader): void;
									public setStrokeEffect(param0: androidgraphicsPathEffect): void;
									public setStrokeWidth(param0: number): void;
									public getStrokeShader(): androidgraphicsShader;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.PathEffect.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class BubbleSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CategoricalSeries {
									public static FILL_COLOR_PROPERTY_KEY: number;
									public static STROKE_COLOR_PROPERTY_KEY: number;
									public static STROKE_WIDTH_PROPERTY_KEY: number;
									public getStrokeWidth(): number;
									public getIsSelected(): boolean;
									public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
									public getBubbleScale(): number;
									public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
									public hitTestDataPoint(param0: androidgraphicsPointF): com.telerik.widget.chart.engine.dataPoints.DataPoint;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setFillColor(param0: number): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public setCanApplyPalette(param0: boolean): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getStrokeEffect(): androidgraphicsPathEffect;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public constructor();
									public getLegendFillColor(): number;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public getBubbleSizeBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public defaultPaletteFamily(): string;
									public setFillShader(param0: androidgraphicsShader): void;
									public setBubbleScale(param0: number): void;
									public getFillColor(): number;
									public getFillPaint(): androidgraphicsPaint;
									public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
									public setStrokeShader(param0: androidgraphicsShader): void;
									public getStrokePaint(): androidgraphicsPaint;
									public applyPaletteToDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.widget.palettes.PaletteEntry): void;
									public hitTestDataPoint(param0: androidgraphicsPointF, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): boolean;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: javalangIterable<javalangObject>);
									public setBubbleSizeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public setStrokeColor(param0: number): void;
									public onBubbleSizeBindingChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public setStrokeEffect(param0: androidgraphicsPathEffect): void;
									public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
									public setStrokeWidth(param0: number): void;
									public getLegendStrokeColor(): number;
									public getStrokeShader(): androidgraphicsShader;
									public getFillShader(): androidgraphicsShader;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class CandlestickSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase {
									public getIsSelected(): boolean;
									public constructor();
									public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onStrokeWidthChanged(param0: number): void;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onStrokeChanged(param0: number): void;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export abstract class CategoricalSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CategoricalSeriesBase {
									public getIsSelected(): boolean;
									public constructor();
									public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: javalangIterable<javalangObject>);
									public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public setValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public setValueBinding(param0: com.telerik.android.common.Function): void;
									public initDataBinding(): void;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export abstract class CategoricalSeriesBase extends com.telerik.widget.chart.visualization.cartesianChart.series.CartesianSeries {
									public getIsSelected(): boolean;
									public constructor();
									public setCategoryBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setCombineMode(param0: com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public setCategoryBinding(param0: com.telerik.android.common.Function): void;
									public getStackGroupKey(): javalangObject;
									public setStackGroupKey(param0: javalangObject): void;
									public getCategoryBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getCombineMode(): com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public initDataBinding(): void;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class CategoricalSeriesLabelRenderer extends com.telerik.widget.chart.visualization.common.renderers.PointingLabelRenderer {
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
									public constructor();
									public getLabelSize(): number;
									public setLabelTextColor(param0: number): void;
									public setLabelMargin(param0: number): void;
									public calculateLabelPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsRect): com.telerik.android.common.math.RadPoint;
									public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public getLabelValueToStringConverter(): com.telerik.android.common.Function;
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries, param1: number, param2: number);
									public setLabelFontStyle(param0: number): void;
									public setLabelFont(param0: androidgraphicsTypeface): void;
									public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
									public getLabelTextColor(): number;
									public setLabelSize(param0: number): void;
									public setLabelFormat(param0: string): void;
									public getLabelFont(): androidgraphicsTypeface;
									public getLabelFontStyle(): number;
									public getLabelFormat(): string;
									public getLabelMargin(): number;
									public getLabelText(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.PointSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.DataPointIndicatorRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export abstract class CategoricalStrokedSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CategoricalSeries implements com.telerik.widget.chart.visualization.common.StrokedSeries {
									public static STROKE_COLOR_PROPERTY_KEY: number;
									public static STROKE_THICKNESS_PROPERTY_KEY: number;
									public lineTouchSize: number;
									// public model: com.telerik.widget.chart.engine.series.PointSeriesModel;
									public renderer: com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public setStrokeThickness(param0: number): void;
									public getIsSelected(): boolean;
									public getDataPointIndicatorRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.categorical.DataPointIndicatorRenderer;
									public hitTestDataPoint(param0: androidgraphicsPointF): com.telerik.widget.chart.engine.dataPoints.DataPoint;
									public getLineTouchTargetSize(): number;
									public setTouchTargetRadius(param0: number): void;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setDataPointIndicatorRenderer(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.DataPointIndicatorRenderer): void;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
									public getTouchTargetRadius(): number;
									public constructor();
									public getLegendFillColor(): number;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
									public drawCore(param0: androidgraphicsCanvas): void;
									public hitTestDataPoint(param0: androidgraphicsPointF, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): boolean;
									public setLineTouchTargetSize(param0: number): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: javalangIterable<javalangObject>);
									public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public setStrokeColor(param0: number): void;
									public getDashArray(): native.Array<number>;
									public getRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public getLegendStrokeColor(): number;
									public setDashArray(param0: native.Array<number>): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export abstract class DataPointIndicatorRenderer extends com.telerik.android.common.PropertyManager {
									public static POINT_INDICATOR_STROKE_COLOR_PROPERTY_KEY: number;
									public static POINT_INDICATOR_COLOR_PROPERTY_KEY: number;
									public static POINT_INDICATOR_STROKE_WIDTH_PROPERTY_KEY: number;
									public PALETTE_FAMILY: string;
									public owner: com.telerik.widget.chart.visualization.common.ChartSeries;
									public pointIndicatorStrokeWidth: number;
									public pointIndicatorColor: number;
									public pointIndicatorStrokePaint: androidgraphicsPaint;
									public pointIndicatorStrokeColor: number;
									public pointIndicatorPaint: androidgraphicsPaint;
									public dataPointLocations: javautilList<javalangObject>;
									public getPointIndicatorStrokeWidth(): number;
									public constructor();
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
									public clearDataPointLocations(): void;
									public invalidatePalette(): void;
									public drawDataPointIndicators(param0: androidgraphicsCanvas): void;
									public setPointIndicatorStrokeColor(param0: number): void;
									public drawDataPointIndicator(param0: androidgraphicsCanvas, param1: number, param2: number): void;
									public addDataPointLocation(param0: number, param1: number): void;
									public getPointIndicatorColor(): number;
									public getPointIndicatorStrokeColor(): number;
									public setPointIndicatorStrokeWidth(param0: number): void;
									public addDataPointLocation(param0: androidgraphicsPoint): void;
									public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
									public setPointIndicatorColor(param0: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class LineSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CategoricalStrokedSeries {
									public getIsSelected(): boolean;
									public constructor();
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public defaultPaletteFamily(): string;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: javalangIterable<javalangObject>);
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public hitTest(param0: androidgraphicsPointF): boolean;
									public getStrokeThickness(): number;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class OhlcSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase {
									public static DOWN_STROKE_COLOR_PROPERTY_KEY: number;
									public static DOWN_STROKE_WIDTH_PROPERTY_KEY: number;
									public getIsSelected(): boolean;
									public constructor();
									public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
									public getDownStrokeWidth(): number;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public setDownStrokeWidth(param0: number): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public setDownStrokeColor(param0: number): void;
									public getDownStrokeColor(): number;
									public setStrokeWidth(param0: number): void;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPointCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.OhlcPointRendererBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export abstract class OhlcSeriesBase extends com.telerik.widget.chart.visualization.cartesianChart.series.CartesianSeries {
									public static STROKE_COLOR_PROPERTY_KEY: number;
									public static STROKE_WIDTH_PROPERTY_KEY: number;
									public renderer: com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.OhlcPointRendererBase;
									public getStrokeWidth(): number;
									public getIsSelected(): boolean;
									public setCategoryBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
									public setOpenBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
									public setCloseBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public getLowBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setIsSelected(param0: boolean): void;
									public getOpenBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public setCategoryBinding(param0: com.telerik.android.common.Function): void;
									public onStrokeWidthChanged(param0: number): void;
									public getHighBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setLowBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public getCategoryBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onStrokeChanged(param0: number): void;
									public getStrokeColor(): number;
									public setLowBinding(param0: com.telerik.android.common.Function): void;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public constructor();
									public getLegendFillColor(): number;
									public setHighBinding(param0: com.telerik.android.common.Function): void;
									public invalidatePalette(): void;
									public setData(param0: javalangIterable<javalangObject>): void;
									public dataPoints(): com.telerik.widget.chart.engine.dataPoints.DataPointCollection;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public defaultPaletteFamily(): string;
									public setOpenBinding(param0: com.telerik.android.common.Function): void;
									public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
									public applyPaletteToDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.widget.palettes.PaletteEntry): void;
									public setHighBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public setStrokeColor(param0: number): void;
									public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
									public getLegendStrokeColor(): number;
									public setStrokeWidth(param0: number): void;
									public getCloseBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setCloseBinding(param0: com.telerik.android.common.Function): void;
									public initDataBinding(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class OhlcSeriesLabelRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CategoricalSeriesLabelRenderer {
									public static LABEL_FORMAT: string;
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
									public constructor();
									public getLabelSize(): number;
									public setLabelTextColor(param0: number): void;
									public setLabelMargin(param0: number): void;
									public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public getLabelValueToStringConverter(): com.telerik.android.common.Function;
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries, param1: number, param2: number);
									public setLabelFontStyle(param0: number): void;
									public setLabelFont(param0: androidgraphicsTypeface): void;
									public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
									public getLabelTextColor(): number;
									public setLabelSize(param0: number): void;
									public setLabelFormat(param0: string): void;
									public getLabelFont(): androidgraphicsTypeface;
									public getLabelFormat(): string;
									public getLabelFontStyle(): number;
									public getLabelMargin(): number;
									public getLabelText(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.PathEffect.d.ts" />
/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class RangeBarSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeSeriesBase {
									public static FILL_COLOR_PROPERTY_KEY: number;
									public static STROKE_COLOR_PROPERTY_KEY: number;
									public static STROKE_WIDTH_PROPERTY_KEY: number;
									public getStrokeWidth(): number;
									public getIsSelected(): boolean;
									public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
									public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setFillColor(param0: number): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getRoundBarsRadius(): number;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public setCanApplyPalette(param0: boolean): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public getStrokeColor(): number;
									public setAreBarsRounded(param0: boolean): void;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getStrokeEffect(): androidgraphicsPathEffect;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public constructor();
									public getLegendFillColor(): number;
									public setRoundBarsRadius(param0: number): void;
									public invalidatePalette(): void;
									public setData(param0: javalangIterable<javalangObject>): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public setFillShader(param0: androidgraphicsShader): void;
									public defaultPaletteFamily(): string;
									public getAreBarsRounded(): boolean;
									public clearPaletteFromDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getFillColor(): number;
									public getFillPaint(): androidgraphicsPaint;
									public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
									public setStrokeShader(param0: androidgraphicsShader): void;
									public getStrokePaint(): androidgraphicsPaint;
									public applyPaletteToDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.widget.palettes.PaletteEntry): void;
									public setStrokeColor(param0: number): void;
									public setStrokeEffect(param0: androidgraphicsPathEffect): void;
									public getLegendStrokeColor(): number;
									public setStrokeWidth(param0: number): void;
									public getStrokeShader(): androidgraphicsShader;
									public getFillShader(): androidgraphicsShader;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class RangeBarSeriesLabelRenderer extends com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer {
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
									public constructor();
									public getLabelSize(): number;
									public setLabelTextColor(param0: number): void;
									public setLabelMargin(param0: number): void;
									public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public getLabelValueToStringConverter(): com.telerik.android.common.Function;
									public setLabelFontStyle(param0: number): void;
									public setLabelFont(param0: androidgraphicsTypeface): void;
									public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
									public getLabelTextColor(): number;
									public setLabelSize(param0: number): void;
									public setLabelFormat(param0: string): void;
									public getLabelFont(): androidgraphicsTypeface;
									public getLabelFontStyle(): number;
									public getLabelFormat(): string;
									public getLabelMargin(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export abstract class RangeSeriesBase extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CategoricalSeriesBase {
									public getIsSelected(): boolean;
									public constructor();
									public setHighBinding(param0: com.telerik.android.common.Function): void;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public getLowBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public setHighBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public getHighBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setLowBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public setLowBinding(param0: com.telerik.android.common.Function): void;
									public initDataBinding(): void;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class RangeSeriesStrokeMode {
									public static NONE: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeSeriesStrokeMode;
									public static LOW_POINTS: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeSeriesStrokeMode;
									public static HIGH_POINTS: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeSeriesStrokeMode;
									public static LOW_AND_HIGH_POINTS: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeSeriesStrokeMode;
									public static values(): native.Array<com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeSeriesStrokeMode>;
									public static valueOf(param0: string): com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeSeriesStrokeMode;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class SphericalDataPointIndicatorRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.DataPointIndicatorRenderer {
									public pointerIndicatorRadius: number;
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
									public constructor();
									public drawDataPointIndicator(param0: androidgraphicsCanvas, param1: number, param2: number): void;
									public setPointerIndicatorRadius(param0: number): void;
									public getPointerIndicatorRadius(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class SplineAreaSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.AreaSeries {
									public getIsSelected(): boolean;
									public constructor();
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public getFillColor(): number;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: javalangIterable<javalangObject>);
									public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module categorical {
								export class SplineSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.categorical.LineSeries {
									public getIsSelected(): boolean;
									public constructor();
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: com.telerik.widget.chart.engine.databinding.DataPointBinding, param2: javalangIterable<javalangObject>);
									public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public constructor(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding, param1: javalangIterable<javalangObject>);
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BarSeries.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export class BarPointRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRendererBase {
									public constructor(param0: javalangObject);
									public pointColors(): javautilHashMap<javalangObject,javalangObject>;
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BarSeries);
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public renderPointCore(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export class BubblePointRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ScatterPointRenderer {
									public constructor(param0: javalangObject);
									public pointColors(): javautilHashMap<javalangObject,javalangObject>;
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries);
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public renderPointCore(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CandlestickSeries.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export class CandlestickPointRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.OhlcPointRendererBase {
									public constructor(param0: javalangObject);
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase);
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CandlestickSeries);
									public getBodyPaint(): androidgraphicsPaint;
									public setBodyPaint(param0: androidgraphicsPaint): void;
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public renderPointCore(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.CategoricalBubbleDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BubbleSeries.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export class CategoricalBubblePointRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRendererBase {
									public constructor(param0: javalangObject);
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BubbleSeries);
									public pointColors(): javautilHashMap<javalangObject,javalangObject>;
									public getPointRadius(param0: com.telerik.widget.chart.engine.dataPoints.CategoricalBubbleDataPoint): number;
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public renderPointCore(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export class ChartDataPointRenderer {
									/**
									 * Constructs a new instance of the com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer interface with the provided implementation.
									 */
									public constructor(implementation: {
										renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									});
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export abstract class ChartDataPointRendererBase {
									public constructor(param0: javalangObject);
									public getSeries(): javalangObject;
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public renderPointCore(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export class OhlcPointRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.OhlcPointRendererBase {
									public downStrokePaint: androidgraphicsPaint;
									public constructor(param0: javalangObject);
									public getDownStroke(): androidgraphicsPaint;
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase);
									public setDownStroke(param0: androidgraphicsPaint): void;
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public renderPointCore(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export abstract class OhlcPointRendererBase extends com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRendererBase {
									public strokePaint: androidgraphicsPaint;
									public constructor(param0: javalangObject);
									public pointColors(): javautilHashMap<javalangObject,javalangObject>;
									public upStrokePaint(): androidgraphicsPaint;
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase);
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeBarSeries.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export class RangeBarPointRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRendererBase {
									public constructor(param0: javalangObject);
									public pointColors(): javautilHashMap<javalangObject,javalangObject>;
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeBarSeries);
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public renderPointCore(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module pointrenderers {
								export class ScatterPointRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRendererBase {
									public constructor(param0: javalangObject);
									public pointColors(): javautilHashMap<javalangObject,javalangObject>;
									public constructor(param0: com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries);
									public renderPoint(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public renderPointCore(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class BubbleSeriesLabelRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterSeriesLabelRenderer {
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
									public constructor();
									public getLabelSize(): number;
									public setLabelTextColor(param0: number): void;
									public setLabelMargin(param0: number): void;
									public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public getLabelValueToStringConverter(): com.telerik.android.common.Function;
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries, param1: number, param2: number);
									public setLabelFontStyle(param0: number): void;
									public setLabelFont(param0: androidgraphicsTypeface): void;
									public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
									public getLabelTextColor(): number;
									public setLabelSize(param0: number): void;
									public setLabelFormat(param0: string): void;
									public getLabelFont(): androidgraphicsTypeface;
									public getLabelFontStyle(): number;
									public getLabelFormat(): string;
									public getLabelMargin(): number;
									public getLabelText(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class ScatterAreaSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterLineSeries implements com.telerik.widget.chart.visualization.common.FilledSeries {
									public setFillPaint(param0: androidgraphicsPaint): void;
									public getIsSelected(): boolean;
									public constructor();
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public defaultPaletteFamily(): string;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public getFillColor(): number;
									public setIsSelected(param0: boolean): void;
									public setFillColor(param0: number): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class ScatterBubbleSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries {
									public getIsSelected(): boolean;
									public constructor();
									public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
									public getBubbleScale(): number;
									public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public getBubbleSizeBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setBubbleScale(param0: number): void;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public setBubbleSizeBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public onBubbleSizeBindingChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class ScatterBubbleSeriesLabelRenderer extends com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterSeriesLabelRenderer {
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
									public constructor();
									public getLabelSize(): number;
									public setLabelTextColor(param0: number): void;
									public setLabelMargin(param0: number): void;
									public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public getLabelValueToStringConverter(): com.telerik.android.common.Function;
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries, param1: number, param2: number);
									public setLabelFontStyle(param0: number): void;
									public setLabelFont(param0: androidgraphicsTypeface): void;
									public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
									public getLabelTextColor(): number;
									public setLabelSize(param0: number): void;
									public setLabelFormat(param0: string): void;
									public getLabelFont(): androidgraphicsTypeface;
									public getLabelFontStyle(): number;
									public getLabelFormat(): string;
									public getLabelMargin(): number;
									public getLabelText(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class ScatterLineSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries implements com.telerik.widget.chart.visualization.common.StrokedSeries {
									public lineTouchSize: number;
									public setStrokeThickness(param0: number): void;
									public getIsSelected(): boolean;
									public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
									public initFields(): void;
									public getLineTouchTargetSize(): number;
									public setTouchTargetRadius(param0: number): void;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public setStrokePaint(param0: androidgraphicsPaint): void;
									public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
									public getTouchTargetRadius(): number;
									public constructor();
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public defaultPaletteFamily(): string;
									public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
									public drawCore(param0: androidgraphicsCanvas): void;
									public setLineTouchTargetSize(param0: number): void;
									public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public setStrokeColor(param0: number): void;
									public getRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public hitTest(param0: androidgraphicsPointF): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPointCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ScatterPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class ScatterPointSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.CartesianSeries {
									public static FILL_COLOR_PROPERTY_KEY: number;
									public static STROKE_COLOR_PROPERTY_KEY: number;
									public static STROKE_THICKNESS_PROPERTY_KEY: number;
									public scatterPointRenderer: com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ScatterPointRenderer;
									public getIsSelected(): boolean;
									public hitTestDataPoint(param0: androidgraphicsPointF): com.telerik.widget.chart.engine.dataPoints.DataPoint;
									public setFillColor(param0: number): void;
									public getYValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public setYValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public setXValueBinding(param0: com.telerik.android.common.Function): void;
									public setCanApplyPalette(param0: boolean): void;
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public setStrokePaint(param0: androidgraphicsPaint): void;
									public dataPoints(): com.telerik.widget.chart.engine.dataPoints.DataPointCollection;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public getDistanceToPoint(param0: androidgraphicsPoint, param1: androidgraphicsPoint): number;
									public getFillPaint(): androidgraphicsPaint;
									public getFillColor(): number;
									public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getStrokePaint(): androidgraphicsPaint;
									public hitTestDataPoint(param0: androidgraphicsPointF, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): boolean;
									public applyPaletteToDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.widget.palettes.PaletteEntry): void;
									public setStrokeColor(param0: number): void;
									public getLegendStrokeColor(): number;
									public setFillPaint(param0: androidgraphicsPaint): void;
									public setStrokeThickness(param0: number): void;
									public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
									public setTouchTargetSize(param0: number): void;
									public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
									public setXValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
									public initFields(): void;
									public setPointSize(param0: number): void;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public getTouchTargetSize(): number;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public setYValueBinding(param0: com.telerik.android.common.Function): void;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public getCollectionIndex(): number;
									public constructor();
									public getLegendFillColor(): number;
									public invalidatePalette(): void;
									public setData(param0: javalangIterable<javalangObject>): void;
									public defaultPaletteFamily(): string;
									public getXValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
									public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
									public initDataBinding(): void;
									public getPointSize(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class ScatterSeriesLabelRenderer extends com.telerik.widget.chart.visualization.common.renderers.PointingLabelRenderer {
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
									public constructor();
									public getLabelSize(): number;
									public setLabelTextColor(param0: number): void;
									public setLabelMargin(param0: number): void;
									public calculateLabelPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsRect): com.telerik.android.common.math.RadPoint;
									public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									public getLabelValueToStringConverter(): com.telerik.android.common.Function;
									public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries, param1: number, param2: number);
									public setLabelFontStyle(param0: number): void;
									public setLabelFont(param0: androidgraphicsTypeface): void;
									public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
									public getLabelTextColor(): number;
									public setLabelSize(param0: number): void;
									public setLabelFormat(param0: string): void;
									public getLabelFont(): androidgraphicsTypeface;
									public getLabelFontStyle(): number;
									public getLabelFormat(): string;
									public getLabelMargin(): number;
									public getLabelText(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class ScatterSplineAreaSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterAreaSeries {
									public getIsSelected(): boolean;
									public constructor();
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public getFillColor(): number;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.LineRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module cartesianChart {
						export module series {
							export module scatter {
								export class ScatterSplineSeries extends com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterLineSeries {
									public getIsSelected(): boolean;
									public constructor();
									public invalidatePalette(): void;
									public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
									public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
									public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
									public setIsSelected(param0: boolean): void;
									public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
									public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public createRenderer(): com.telerik.widget.chart.visualization.common.renderers.LineRenderer;
									public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
									public getStrokeThickness(): number;
									public getStrokeColor(): number;
									public onDataBindingComplete(): void;
									public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
									public getCollectionIndex(): number;
									public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class AnnotationCollection extends com.telerik.widget.chart.visualization.common.PresenterCollection {
							public constructor();
							public constructor(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisType.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export abstract class Axis extends com.telerik.widget.chart.visualization.common.ChartElementPresenter implements com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer {
							public static AXIS_Z_INDEX: number;
							public static LINE_THICKNESS_KEY: string;
							public static LINE_COLOR_KEY: string;
							public static LABEL_COLOR: string;
							public static LABEL_SIZE_KEY: string;
							public static LABEL_FONT_KEY: string;
							public static LABEL_FONT_STYLE_KEY: string;
							public static LABEL_FIT_MODE: string;
							public static LABEL_ROTATION_ANGLE: string;
							public static TICK_COLOR_KEY: string;
							public static TICK_THICKNESS_KEY: string;
							public static LABEL_COLOR_PROPERTY_KEY: number;
							public static LABEL_SIZE_PROPERTY_KEY: number;
							public static LABEL_FONT_PROPERTY_KEY: number;
							public static LABEL_FONT_STYLE_PROPERTY_KEY: number;
							public static LABEL_FIT_MODE_PROPERTY_KEY: number;
							public static LABEL_ROTATION_ANGLE_PROPERTY_KEY: number;
							public static TICK_COLOR_PROPERTY_KEY: number;
							public static TICK_THICKNESS_PROPERTY_KEY: number;
							public defaultLabelRenderer: com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer;
							public getElement(): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getShowLabels(): boolean;
							public setLabelFormat(param0: string): void;
							public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public setShowLabels(param0: boolean): void;
							public getLayoutSlot(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: com.telerik.widget.chart.visualization.common.ChartLayoutContext): com.telerik.android.common.math.RadRect;
							public getLabelFormat(): string;
							public createModel(): com.telerik.widget.chart.engine.axes.AxisModel;
							public getLabelSize(): number;
							public setAxisType(param0: com.telerik.widget.chart.engine.axes.AxisType): void;
							public getLabelInterval(): number;
							public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public setLabelInterval(param0: number): void;
							public onAttached(): void;
							public getLabelLayoutMode(): com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getMajorTickOffset(): number;
							public setLabelFont(param0: androidgraphicsTypeface): void;
							public getDataPointsForValue(param0: javalangObject): javautilList<javalangObject>;
							public setTickColor(param0: number): void;
							public getCollectionIndex(): number;
							public getAxisType(): com.telerik.widget.chart.engine.axes.AxisType;
							public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public getLabelFont(): androidgraphicsTypeface;
							public getLabelTextColor(): number;
							public setLabelRenderer(param0: com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer): void;
							public setLabelSize(param0: number): void;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public createDefaultLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer;
							public setLabelTextColor(param0: number): void;
							public setLabelOffset(param0: number): void;
							public defaultPaletteFamily(): string;
							public getLastLayoutContext(): com.telerik.widget.chart.visualization.common.ChartLayoutContext;
							public setVerticalWidth(param0: number): void;
							public setTickThickness(param0: number): void;
							public invalidatePalette(): void;
							public getModel(): com.telerik.widget.chart.engine.axes.AxisModel;
							public getTickColor(): number;
							public getLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer;
							public getLastLabelVisibility(): com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility;
							public setLastLabelVisibility(param0: com.telerik.widget.chart.engine.axes.common.AxisLastLabelVisibility): void;
							public setLabelMargin(param0: number): void;
							public getDefaultZIndex(): number;
							public constructor();
							public refreshNodeCore(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public getLabelFontStyle(): number;
							public resolveLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer;
							public render(param0: androidgraphicsCanvas): void;
							public getLabelOffset(): number;
							public getVerticalWidth(): number;
							public setLabelRotationAngle(param0: number): void;
							public getLabelFitMode(): com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode;
							public setLabelFontStyle(param0: number): void;
							public getLabelMargin(): number;
							public getLabelValueToStringConverter(): com.telerik.android.common.Function;
							public getTickThickness(): number;
							public setMajorTickOffset(param0: number): void;
							public setLabelLayoutMode(param0: com.telerik.widget.chart.engine.axes.AxisLabelLayoutMode): void;
							public getLabelRotationAngle(): number;
							public setLabelFitMode(param0: com.telerik.widget.chart.engine.axes.common.AxisLabelFitMode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export abstract class CartesianAxis extends com.telerik.widget.chart.visualization.common.LineAxis {
							public linkedSeriesCount: number;
							public createDefaultLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer;
							public setLabelTextColor(param0: number): void;
							public setLabelFormat(param0: string): void;
							public setVerticalLocation(param0: com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation): void;
							public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public getLabelFormat(): string;
							public getLabelSize(): number;
							public invalidatePalette(): void;
							public getVerticalLocation(): com.telerik.widget.chart.engine.axes.common.AxisVerticalLocation;
							public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public setLabelMargin(param0: number): void;
							public constructor();
							public getLabelFontStyle(): number;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getHorizontalLocation(): com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation;
							public setHorizontalLocation(param0: com.telerik.widget.chart.engine.axes.common.AxisHorizontalLocation): void;
							public setLabelFont(param0: androidgraphicsTypeface): void;
							public setLabelFontStyle(param0: number): void;
							public getLabelMargin(): number;
							public getLabelValueToStringConverter(): com.telerik.android.common.Function;
							public getCollectionIndex(): number;
							public measureNodeOverride(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public getLabelFont(): androidgraphicsTypeface;
							public getLabelTextColor(): number;
							public setLabelSize(param0: number): void;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export abstract class ChartElementPresenter extends com.telerik.widget.chart.visualization.common.PresenterBase {
							public chart: com.telerik.widget.chart.visualization.common.RadChartViewBase;
							public constructor();
							public getElement(): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public onAttached(): void;
							public onPaletteInvalidated(): void;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getPalette(): com.telerik.widget.palettes.ChartPalette;
							public setZIndex(param0: number): void;
							public getCanApplyPalette(): boolean;
							public invalidatePalette(): void;
							public updatePalette(param0: boolean): void;
							public requestRender(): void;
							public getCollectionIndex(): number;
							public detach(): void;
							public requestLayout(): void;
							public getChart(): com.telerik.widget.chart.visualization.common.RadChartViewBase;
							public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public getZIndex(): number;
							public attach(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public processPaletteChanged(): void;
							public getDefaultZIndex(): number;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class ChartLayoutContext {
							public constructor();
							public panOffset(): com.telerik.android.common.math.RadPoint;
							public clipRect(): com.telerik.android.common.math.RadRect;
							public constructor(param0: com.telerik.android.common.math.RadSize, param1: com.telerik.android.common.math.RadSize, param2: com.telerik.android.common.math.RadPoint, param3: com.telerik.android.common.math.RadRect);
							public scale(): com.telerik.android.common.math.RadSize;
							public getAvailableSize(): com.telerik.android.common.math.RadSize;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class ChartPresenterImpl extends com.telerik.widget.chart.visualization.common.ChartElementPresenter {
							public constructor();
							public getElement(): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public onUIUpdated(): void;
							public refreshNodeCore(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public defaultPaletteFamily(): string;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
							public invalidatePalette(): void;
							public getCollectionIndex(): number;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public processPaletteChanged(): void;
							public constructor(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase);
							public getDefaultZIndex(): number;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartElement.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.DataPointInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.PropertyChangedListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.SeriesSelectionMode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export abstract class ChartSeries extends com.telerik.widget.chart.visualization.common.ChartElementPresenter implements com.telerik.widget.chart.engine.view.ChartSeries, com.telerik.widget.chart.engine.databinding.datasources.DataBindingListener, com.telerik.widget.chart.engine.series.ChartSeriesModel.DataPointsChangedListener {
							public static SERIES_Z_INDEX: number;
							public isVisibleInLegend: boolean;
							public getElement(): com.telerik.widget.chart.engine.elementTree.ChartElement;
							public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
							public setLabelFormat(param0: string): void;
							public getShowLabels(): boolean;
							public removePropertyChangedListener(param0: com.telerik.widget.chart.visualization.common.PropertyChangedListener): void;
							public getLabelFormat(): string;
							public setShowLabels(param0: boolean): void;
							public getLabelSize(): number;
							public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
							public setLabelStrokeColor(param0: number): void;
							public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public dataSource(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
							public setIsVisibleInLegend(param0: boolean): void;
							public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public onAttached(): void;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getPlotAreaSize(): com.telerik.android.common.math.RadSize;
							public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							public findClosestPoint(param0: androidgraphicsPoint): com.telerik.widget.chart.visualization.behaviors.DataPointInfo;
							public setLabelFont(param0: androidgraphicsTypeface): void;
							public notifyPropertyChangedListeners(param0: string, param1: javalangObject): void;
							public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public getLabelFillColor(): number;
							public getCollectionIndex(): number;
							public onModelAttached(): void;
							public drawCore(param0: androidgraphicsCanvas): void;
							public getLabelFont(): androidgraphicsTypeface;
							public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public setClipToPlotArea(param0: boolean): void;
							public getLabelTextColor(): number;
							public getSelectionMode(): com.telerik.widget.chart.visualization.common.SeriesSelectionMode;
							public setLabelSize(param0: number): void;
							public getClipToPlotArea(): boolean;
							public addPropertyChangedListener(param0: com.telerik.widget.chart.visualization.common.PropertyChangedListener): void;
							public getIsSelected(): boolean;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public initDataBinding(): void;
							public setLabelTextColor(param0: number): void;
							public getLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
							public getIsVisibleInLegend(): boolean;
							public setLabelPadding(param0: number, param1: number, param2: number, param3: number): void;
							public onIsVisibleInLegendChanged(param0: boolean): void;
							public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
							public invalidatePalette(): void;
							public hitTestDataPoint(param0: androidgraphicsPointF): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							public postRender(param0: androidgraphicsCanvas): void;
							public setLabelMargin(param0: number): void;
							public onDataBindingComplete(): void;
							public getDefaultZIndex(): number;
							public constructor();
							public getLabelFontStyle(): number;
							public setData(param0: javalangIterable<javalangObject>): void;
							public getDistanceToPoint(param0: androidgraphicsPoint, param1: androidgraphicsPoint): number;
							public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
							public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public render(param0: androidgraphicsCanvas): void;
							public hitTest(param0: androidgraphicsPointF): boolean;
							public setLabelFontStyle(param0: number): void;
							public getLabelMargin(): number;
							public model(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
							public setSelectionMode(param0: com.telerik.widget.chart.visualization.common.SeriesSelectionMode): void;
							public getLabelValueToStringConverter(): com.telerik.android.common.Function;
							public setLabelFillColor(param0: number): void;
							public setLabelRenderer(param0: com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer): void;
							public hitTestDataPoint(param0: androidgraphicsPointF, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): boolean;
							public getData(): javalangIterable<javalangObject>;
							public getLabelStrokeColor(): number;
							public onIsSelectedChanged(): void;
							public onDataPointSelectionChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public setIsSelected(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class FilledSeries {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.visualization.common.FilledSeries interface with the provided implementation.
							 */
							public constructor(implementation: {
								getFillColor(): number;
							});
							public getFillColor(): number;
						}
					}
				}
			}
		}
	}
}

import androidtextStaticLayout = android.text.StaticLayout;
/// <reference path="./android.text.StaticLayout.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class LabelSizeInfo {
							public textLayout: androidtextStaticLayout;
							public size: com.telerik.android.common.math.RadSize;
							public untransformedSize: com.telerik.android.common.math.RadSize;
							public transformOffset: com.telerik.android.common.math.RadPoint;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export abstract class LineAxis extends com.telerik.widget.chart.visualization.common.Axis {
							public static LINE_COLOR_PROPERTY_KEY: number;
							public static LINE_THICKNESS_PROPERTY_KEY: number;
							public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
							public setLabelTextColor(param0: number): void;
							public setLabelFormat(param0: string): void;
							public setShowLine(param0: boolean): void;
							public setLineDashArray(param0: native.Array<number>): void;
							public getShowLine(): boolean;
							public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public getLabelFormat(): string;
							public getLabelSize(): number;
							public setLineThickness(param0: number): void;
							public invalidatePalette(): void;
							public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public setLabelMargin(param0: number): void;
							public constructor();
							public getLabelFontStyle(): number;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public render(param0: androidgraphicsCanvas): void;
							public setLineColor(param0: number): void;
							public setLabelFont(param0: androidgraphicsTypeface): void;
							public setLabelFontStyle(param0: number): void;
							public getLabelMargin(): number;
							public getLabelValueToStringConverter(): com.telerik.android.common.Function;
							public getCollectionIndex(): number;
							public getLineThickness(): number;
							public getLineDashArray(): native.Array<number>;
							public getLabelFont(): androidgraphicsTypeface;
							public getLabelTextColor(): number;
							public setLabelSize(param0: number): void;
							public getLineColor(): number;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendItem.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export abstract class PointTemplateSeries extends com.telerik.widget.chart.visualization.common.ChartSeries implements com.telerik.widget.primitives.legend.LegendSelectable {
							public legendItem: com.telerik.widget.primitives.legend.LegendItem;
							public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
							public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
							public onIsVisibleInLegendChanged(param0: boolean): void;
							public getLegendFillColor(): number;
							public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
							public invalidatePalette(): void;
							public getLegendTitle(): string;
							public setLegendTitle(param0: string): void;
							public getLegendStrokeColor(): number;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public setDataPointRenderer(param0: com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer): void;
							public onDataBindingComplete(): void;
							public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public applyPaletteToDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: com.telerik.widget.palettes.PaletteEntry): void;
							public constructor();
							public onUIUpdated(): void;
							public onAttached(): void;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public initFields(): void;
							public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							public getDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
							public getDefaultEntry(): com.telerik.widget.palettes.PaletteEntry;
							public clearPaletteFromDefaultVisual(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public getCollectionIndex(): number;
							public measureNodeOverride(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public createDataPointRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.pointrenderers.ChartDataPointRenderer;
							public drawCore(param0: androidgraphicsCanvas): void;
							public onDetached(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public processPaletteChanged(): void;
							public setIsSelected(param0: boolean): void;
							public getIsSelected(): boolean;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export abstract class PresenterBase extends com.telerik.android.common.PropertyManager implements com.telerik.widget.chart.engine.view.ChartElementPresenter, com.telerik.widget.palettes.PaletteChangedListener {
							public lastLayoutContext: com.telerik.widget.chart.visualization.common.ChartLayoutContext;
							public setPaletteFamily(param0: string): void;
							public updateUI(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
							public applyPaletteCore(param0: com.telerik.widget.palettes.ChartPalette): void;
							public defaultPaletteFamily(): string;
							public isLoaded(): boolean;
							public setCanApplyPalette(param0: boolean): void;
							public invalidatePalette(): void;
							public requestRender(): void;
							public getPaletteFamily(): string;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public postRender(param0: androidgraphicsCanvas): void;
							public constructor();
							public onUIUpdated(): void;
							public refreshNodeCore(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public paletteFamily(): string;
							public setVisible(param0: boolean): void;
							public isPaletteApplied(): boolean;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public render(param0: androidgraphicsCanvas): void;
							public isVisible(): boolean;
							public onUnloaded(): void;
							public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
							public setVisible(param0: boolean, param1: boolean): void;
							public getPaletteFamilyCore(): string;
							public getCanApplyPalette(): boolean;
							public onLoaded(): void;
							public getCollectionIndex(): number;
							public measureNodeOverride(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.common.ChartElementPresenter.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.RadChartViewBase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class PresenterCollection extends com.telerik.android.common.ObservableCollection {
							public constructor();
							public add(param0: com.telerik.widget.chart.visualization.common.ChartElementPresenter): boolean;
							public init(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase): void;
							public add(param0: number, param1: javalangObject): void;
							public clear(): void;
							public add(param0: number, param1: com.telerik.widget.chart.visualization.common.ChartElementPresenter): void;
							public reset(): void;
							public owner(): com.telerik.widget.chart.visualization.common.RadChartViewBase;
							public remove(param0: javalangObject): boolean;
							public remove(param0: number): javalangObject;
							public remove(param0: number): com.telerik.widget.chart.visualization.common.ChartElementPresenter;
							public add(param0: javalangObject): boolean;
							public constructor(param0: com.telerik.widget.chart.visualization.common.RadChartViewBase);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class PropertyChangedListener {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.visualization.common.PropertyChangedListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onPropertyChanged(param0: javalangObject, param1: string, param2: javalangObject): void;
							});
							public onPropertyChanged(param0: javalangObject, param1: string, param2: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

import androidcontentresTypedArray = android.content.res.TypedArray;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.android.common.ObservableCollection.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.tooltip.contracts.DrawListener.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.BehaviorCollectionChangedInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartBehavior.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartBehaviorCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartDataContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartElementPresenter.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.PresenterCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.StackedSeriesContext.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export abstract class RadChartViewBase extends androidviewView {
							public updateSuspended: boolean;
							public renderSuspended: boolean;
							public paddingLeft: number;
							public paddingRight: number;
							public paddingTop: number;
							public paddingBottom: number;
							public clipToBounds: boolean;
							public oldWidth: number;
							public oldHeight: number;
							public setMaxZoom(param0: com.telerik.android.common.math.RadSize): void;
							public addOnDrawListener(param0: com.telerik.android.primitives.widget.tooltip.contracts.DrawListener): void;
							public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
							public setChartPadding(param0: number, param1: number, param2: number, param3: number): void;
							public getDataContext(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public createChartAreaModel(): com.telerik.widget.chart.engine.chartAreas.ChartAreaModel;
							public resetBehaviors(): void;
							public setSeries(param0: com.telerik.widget.chart.visualization.common.PresenterCollection): void;
							public getChartArea(): com.telerik.widget.chart.engine.chartAreas.ChartAreaModel;
							public onMeasure(param0: number, param1: number): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public getPanOffsetX(): number;
							public sortPresenters(): void;
							public endUpdate(): void;
							public onTouchEvent(param0: androidviewMotionEvent): boolean;
							public setChartPadding(param0: number): void;
							public onBehaviorsCollectionChanging(param0: com.telerik.widget.chart.visualization.behaviors.BehaviorCollectionChangedInfo): void;
							public onDetachedFromWindow(): void;
							public getPanOffset(): com.telerik.android.common.math.RadPoint;
							public onScroll(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
							public setClipToBounds(param0: boolean): void;
							public getViewportHeight(): number;
							public getPalette(): com.telerik.widget.palettes.ChartPalette;
							public getViewportWidth(): number;
							public setSelectionPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
							public getEmptyContent(): javalangObject;
							public clampZoom(param0: number, param1: number): com.telerik.android.common.math.RadSize;
							public getMaxZoom(): com.telerik.android.common.math.RadSize;
							public onLongPress(param0: androidviewMotionEvent): void;
							public getCollectionIndex(): number;
							public arrangeOverride(param0: number, param1: number): com.telerik.android.common.math.RadSize;
							public onDoubleTapEvent(param0: androidviewMotionEvent): boolean;
							public getHoldDelay(): number;
							public onDraw(param0: androidgraphicsCanvas): void;
							public processPaletteChanged(): void;
							public clampTranslate(param0: com.telerik.android.common.math.RadPoint, param1: com.telerik.android.common.math.RadSize): com.telerik.android.common.math.RadPoint;
							public getPlotAreaClip(): com.telerik.android.common.math.RadRect;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public getBehaviors(): com.telerik.widget.chart.visualization.behaviors.ChartBehaviorCollection;
							public onPanOffsetChanged(): void;
							public getZoomWidth(): number;
							public setPanOffset(param0: number, param1: number): void;
							public onShowPress(param0: androidviewMotionEvent): void;
							public beginUpdate(): void;
							public removeOnDrawListener(param0: com.telerik.android.primitives.widget.tooltip.contracts.DrawListener): void;
							public getPanOffsetY(): number;
							public endUpdate(param0: boolean): void;
							public presenterImpl(): com.telerik.widget.chart.visualization.common.ChartElementPresenter;
							public stackedSeriesContext(): com.telerik.widget.chart.visualization.common.StackedSeriesContext;
							public setPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
							public generateEmptyContent(): string;
							public updateChartArea(): void;
							public getDataContext(param0: androidgraphicsPoint): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public onZoomChanged(): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public setHoldDelay(param0: number): void;
							public presenters(): javautilList<javalangObject>;
							public getZoom(): com.telerik.android.common.math.RadSize;
							public invalidatePalette(): void;
							public requestRender(): void;
							public onPresenterRemoved(param0: com.telerik.widget.chart.visualization.common.ChartElementPresenter): void;
							public getZoomHeight(): number;
							public onAttachedToWindow(): void;
							public onDown(param0: androidviewMotionEvent): boolean;
							public onScaleEnd(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
							public chartAreaModel(): com.telerik.widget.chart.engine.chartAreas.ChartAreaModel;
							public setPanOffset(param0: com.telerik.android.common.math.RadPoint): void;
							public setEmptyContent(param0: javalangObject): void;
							public onSingleTapConfirmed(param0: androidviewMotionEvent): boolean;
							public onPresenterAdded(param0: com.telerik.widget.chart.visualization.common.ChartElementPresenter): void;
							public setZoom(param0: number, param1: number): void;
							public onSingleTapUp(param0: androidviewMotionEvent): boolean;
							public onUnloaded(): void;
							public getSelectionPalette(): com.telerik.widget.palettes.ChartPalette;
							public getSeries(): com.telerik.widget.chart.visualization.common.PresenterCollection;
							public isClipToBounds(): boolean;
							public setZoom(param0: com.telerik.android.common.math.RadSize): void;
							public onDoubleTap(param0: androidviewMotionEvent): boolean;
							public getDataContext(param0: androidgraphicsPoint, param1: boolean): com.telerik.widget.chart.visualization.behaviors.ChartDataContext;
							public constructor(param0: androidcontentContext);
							public getLegendInfos(): com.telerik.android.common.ObservableCollection;
							public validateBehaviourSupport(param0: com.telerik.widget.chart.visualization.behaviors.ChartBehavior): void;
							public onScale(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
							public initFromXML(param0: androidcontentresTypedArray): void;
							public onScaleBegin(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
							public requestInvalidateArrange(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class SeriesSelectionMode {
							public static SERIES: com.telerik.widget.chart.visualization.common.SeriesSelectionMode;
							public static DATA_POINT_SINGLE: com.telerik.widget.chart.visualization.common.SeriesSelectionMode;
							public static DATA_POINT_MULTIPLE: com.telerik.widget.chart.visualization.common.SeriesSelectionMode;
							public static NONE: com.telerik.widget.chart.visualization.common.SeriesSelectionMode;
							public static NOT_SET: com.telerik.widget.chart.visualization.common.SeriesSelectionMode;
							public static valueOf(param0: string): com.telerik.widget.chart.visualization.common.SeriesSelectionMode;
							public static values(): native.Array<com.telerik.widget.chart.visualization.common.SeriesSelectionMode>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class StackedSeriesContext {
							public constructor();
							public getPreviousStackedArea(): javautilList<javalangObject>;
							public setPreviousStackedArea(param0: javautilList<javalangObject>): void;
							public clear(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export class StrokedSeries {
							/**
							 * Constructs a new instance of the com.telerik.widget.chart.visualization.common.StrokedSeries interface with the provided implementation.
							 */
							public constructor(implementation: {
								getStrokeColor(): number;
								getStrokeThickness(): number;
							});
							public getStrokeThickness(): number;
							public getStrokeColor(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class AreaRenderContext {
							}
						}
					}
				}
			}
		}
	}
}

import androidgraphicsPath = android.graphics.Path;
import javautilListIterator = java.util.ListIterator;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.ListIterator.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class AreaRendererBase extends com.telerik.widget.chart.visualization.common.renderers.LineRenderer {
								public static FILL_COLOR_PROPERTY_KEY: number;
								public fillPaint: androidgraphicsPaint;
								public dataPointSegmentsIterator: javautilListIterator<javalangObject>;
								public currentSegmentNode: com.telerik.widget.chart.visualization.common.renderers.ChartSeriesRenderer.DataPointSegment;
								public topSurfacePoints: javautilList<javalangObject>;
								public hitTest(param0: androidgraphicsPointF, param1: number): boolean;
								public shouldDrawTopStroke(): boolean;
								public preparePaths(): void;
								public bottomPointsForStackedSeries(param0: com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext, param1: javautilList<javalangObject>): void;
								public constructor();
								public updateContext(param0: com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext, param1: javautilList<javalangObject>): void;
								public prepareTopDrawingForSegment(param0: com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext): void;
								public points(param0: com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext, param1: com.telerik.android.common.Function): javautilList<javalangObject>;
								public topPoints(param0: com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext): javautilList<javalangObject>;
								public getFillPaint(): androidgraphicsPaint;
								public setFillPaint(param0: androidgraphicsPaint): void;
								public reset(): void;
								public setFillColor(param0: number): void;
								public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
								public getFillColor(): number;
								public getPath(): androidgraphicsPath;
								public renderCore(param0: androidgraphicsCanvas): void;
								public bottomPoints(param0: com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext): javautilList<javalangObject>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export abstract class BaseLabelRenderer extends com.telerik.android.common.PropertyManager implements com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer {
								public static LABEL_FILL_COLOR_PROPERTY_KEY: number;
								public static LABEL_STROKE_COLOR_PROPERTY_KEY: number;
								public static LABEL_COLOR_PROPERTY_KEY: number;
								public static PALETTE_FAMILY: string;
								public labelFormat: string;
								public labelMargin: number;
								public labelTextColor: number;
								public labelFillColor: number;
								public labelStrokeColor: number;
								public labelStrokeWidth: number;
								public labelPaddingTop: number;
								public labelPaddingBottom: number;
								public labelPaddingLeft: number;
								public labelPaddingRight: number;
								public fontStyle: number;
								public labelTypeface: androidgraphicsTypeface;
								public labelTextPaint: androidgraphicsPaint;
								public labelFillPaint: androidgraphicsPaint;
								public labelStrokePaint: androidgraphicsPaint;
								public labelToStringConverter: com.telerik.android.common.Function;
								public owner: com.telerik.widget.chart.visualization.common.ChartSeries;
								public getLabelFillPaint(param0: number): androidgraphicsPaint;
								public getLabelSize(): number;
								public getLabelStrokeColor(): number;
								public calculateLabelPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsRect): com.telerik.android.common.math.RadPoint;
								public setLabelFillColor(param0: number): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public getLabelTextColor(): number;
								public getLabelFormat(): string;
								public getLabelFillColor(): number;
								public getLabelBackgroundBounds(param0: com.telerik.android.common.math.RadPoint, param1: androidgraphicsRect): androidgraphicsRect;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
								public drawLabelText(param0: androidgraphicsCanvas, param1: string, param2: number, param3: number): void;
								public setLabelStrokeColor(param0: number): void;
								public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
								public offsetRight(param0: androidgraphicsRect): number;
								public getLabelFontStyle(): number;
								public setLabelPadding(param0: number, param1: number, param2: number, param3: number): void;
								public drawLabelBackground(param0: androidgraphicsCanvas, param1: androidgraphicsPath, param2: number): void;
								public offsetBottom(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public preventClippingBottom(param0: number, param1: com.telerik.android.common.math.RadRect): number;
								public getLabelMargin(): number;
								public offsetLeft(): number;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public invalidatePalette(): void;
								public constructor();
								public getLabelText(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
								public preventClippingRight(param0: number, param1: com.telerik.android.common.math.RadRect, param2: androidgraphicsRect): number;
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public getTextBounds(param0: string, param1: androidgraphicsPaint): androidgraphicsRect;
								public offsetTop(param0: androidgraphicsRect): number;
								public setLabelTextColor(param0: number): void;
								public prepareLabel(param0: androidgraphicsPath, param1: androidgraphicsRect, param2: com.telerik.android.common.math.RadRect): void;
								public isChartZoomedVertically(): boolean;
								public isChartZoomedHorizontally(): boolean;
								public getLabelFont(): androidgraphicsTypeface;
								public preventClippingTop(param0: number, param1: com.telerik.android.common.math.RadRect, param2: androidgraphicsRect): number;
								public setLabelFormat(param0: string): void;
								public preventClippingLeft(param0: number, param1: com.telerik.android.common.math.RadRect): number;
							}
						}
					}
				}
			}
		}
	}
}

import androidtextTextPaint = android.text.TextPaint;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.axes.AxisLabelModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.CartesianAxis.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class CartesianAxisLabelRenderer {
								public labelPaint: androidtextTextPaint;
								public axis: com.telerik.widget.chart.visualization.common.CartesianAxis;
								public getLabelFontStyle(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public getLabelSize(): number;
								public getLabelMargin(): number;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public renderLabelRotate(param0: androidgraphicsCanvas, param1: com.telerik.android.common.math.RadRect, param2: string, param3: com.telerik.widget.chart.engine.axes.AxisLabelModel): void;
								public setLabelMargin(param0: number): void;
								public setLabelFontStyle(param0: number): void;
								public getLabelTextColor(): number;
								public getLabelFormat(): string;
								public measureLabel(param0: com.telerik.widget.chart.engine.axes.AxisLabelModel, param1: javalangObject): com.telerik.android.common.math.RadSize;
								public setLabelTextColor(param0: number): void;
								public renderLabelMultiLine(param0: androidgraphicsCanvas, param1: com.telerik.android.common.math.RadRect, param2: string, param3: com.telerik.widget.chart.engine.axes.AxisLabelModel): void;
								public constructor(param0: com.telerik.widget.chart.visualization.common.CartesianAxis);
								public getLabelFont(): androidgraphicsTypeface;
								public renderLabelNoFitMode(param0: androidgraphicsCanvas, param1: com.telerik.android.common.math.RadRect, param2: string, param3: com.telerik.widget.chart.engine.axes.AxisLabelModel): void;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class ChartLabelRenderer {
								/**
								 * Constructs a new instance of the com.telerik.widget.chart.visualization.common.renderers.ChartLabelRenderer interface with the provided implementation.
								 */
								public constructor(implementation: {
									renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
									getLabelTextColor(): number;
									setLabelTextColor(param0: number): void;
									getLabelSize(): number;
									setLabelSize(param0: number): void;
									getLabelFont(): androidgraphicsTypeface;
									setLabelFont(param0: androidgraphicsTypeface): void;
									getLabelFontStyle(): number;
									setLabelFontStyle(param0: number): void;
									getLabelFormat(): string;
									setLabelFormat(param0: string): void;
									getLabelMargin(): number;
									setLabelMargin(param0: number): void;
									getLabelValueToStringConverter(): com.telerik.android.common.Function;
									setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								});
								public getLabelFontStyle(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public getLabelSize(): number;
								public getLabelMargin(): number;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public getLabelTextColor(): number;
								public getLabelFormat(): string;
								public setLabelTextColor(param0: number): void;
								public getLabelFont(): androidgraphicsTypeface;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

import javautilLinkedList = java.util.LinkedList;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.ChartSeriesRenderer.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.util.LinkedList.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.ListIterator.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export abstract class ChartSeriesRenderer extends com.telerik.android.common.PropertyManager {
								public model: com.telerik.widget.chart.engine.series.ChartSeriesModel;
								public preparePaths(): void;
								public dataPointSegments(): javautilLinkedList<javalangObject>;
								public reset(): void;
								public render(param0: androidgraphicsCanvas): void;
								public prepare(): void;
								public findPreviousNonEmptyPoint(param0: com.telerik.widget.chart.visualization.common.renderers.ChartSeriesRenderer.DataPointSegment, param1: javautilListIterator<javalangObject>): com.telerik.widget.chart.engine.dataPoints.DataPoint;
								public constructor();
								public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
								public renderCore(param0: androidgraphicsCanvas): void;
								public findNextNonEmptyPoint(param0: com.telerik.widget.chart.visualization.common.renderers.ChartSeriesRenderer.DataPointSegment, param1: javautilListIterator<javalangObject>): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							}
							export module ChartSeriesRenderer {
								export class DataPointSegment {
									public dataPoints: javautilList<javalangObject>;
									public startIndex: number;
									public constructor(param0: com.telerik.widget.chart.visualization.common.renderers.ChartSeriesRenderer);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.cartesianChart.series.categorical.DataPointIndicatorRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class LineRenderer extends com.telerik.widget.chart.visualization.common.renderers.ChartSeriesRenderer {
								public static STROKE_COLOR_PROPERTY_KEY: number;
								public static STROKE_THICKNESS_PROPERTY_KEY: number;
								public layoutContext: com.telerik.widget.chart.visualization.common.ChartLayoutContext;
								public indicatorRenderer: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.DataPointIndicatorRenderer;
								public linePaint: androidgraphicsPaint;
								public linePath: androidgraphicsPath;
								public strokeColor: number;
								public strokeThickness: number;
								public dashArray: native.Array<number>;
								public setPointIndicatorColor(param0: number): void;
								public prepareDataPointIndicators(param0: javautilList<javalangObject>): void;
								public preparePaths(): void;
								public getPointIndicatorStrokeColor(): number;
								public setDataPointIndicatorRenderer(param0: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.DataPointIndicatorRenderer): void;
								public setModel(param0: com.telerik.widget.chart.engine.series.ChartSeriesModel): void;
								public getDashArray(): native.Array<number>;
								public getDataPointIndicatorRenderer(): com.telerik.widget.chart.visualization.cartesianChart.series.categorical.DataPointIndicatorRenderer;
								public setStrokeColor(param0: number): void;
								public getStrokeColor(): number;
								public indicateDataPoints(): boolean;
								public setStrokeThickness(param0: number): void;
								public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
								public renderCore(param0: androidgraphicsCanvas): void;
								public setPointIndicatorStrokeColor(param0: number): void;
								public hitTest(param0: androidgraphicsPointF, param1: number): boolean;
								public setStrokePaint(param0: androidgraphicsPaint): void;
								public getLinePaint(): androidgraphicsPaint;
								public getStrokeThickness(): number;
								public constructor();
								public getPointIndicatorColor(): number;
								public reset(): void;
								public shouldDrawPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): boolean;
								public setDashArray(param0: native.Array<number>): void;
								public getPath(): androidgraphicsPath;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class PointingLabelRenderer extends com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer {
								public pointerLength: number;
								public pointerWidth: number;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries, param1: number, param2: number);
								public getLabelSize(): number;
								public setPointerWidth(param0: number): void;
								public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
								public setLabelSize(param0: number): void;
								public getLabelValueToStringConverter(): com.telerik.android.common.Function;
								public preparePointer(param0: androidgraphicsPath, param1: number, param2: number, param3: boolean): void;
								public getLabelTextColor(): number;
								public getLabelFormat(): string;
								public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
								public getPointerLength(): number;
								public getLabelFontStyle(): number;
								public offsetBottom(): number;
								public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
								public getPointerWidth(): number;
								public getLabelMargin(): number;
								public setLabelFont(param0: androidgraphicsTypeface): void;
								public constructor();
								public setPointerLength(param0: number): void;
								public setLabelFontStyle(param0: number): void;
								public setLabelMargin(param0: number): void;
								public setLabelTextColor(param0: number): void;
								public prepareLabel(param0: androidgraphicsPath, param1: androidgraphicsRect, param2: com.telerik.android.common.math.RadRect): void;
								public getLabelFont(): androidgraphicsTypeface;
								public setLabelFormat(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class ScatterLineRenderer extends com.telerik.widget.chart.visualization.common.renderers.LineRenderer {
								public shouldDrawPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): boolean;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class SplineAreaRenderer extends com.telerik.widget.chart.visualization.common.renderers.AreaRendererBase {
								public topPoints(param0: com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext): javautilList<javalangObject>;
								public bottomPointsForStackedSeries(param0: com.telerik.widget.chart.visualization.common.renderers.AreaRenderContext, param1: javautilList<javalangObject>): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class SplineHelper {
								public getSplinePoints(param0: javautilList<javalangObject>, param1: com.telerik.android.common.math.RadSize, param2: com.telerik.widget.chart.engine.dataPoints.DataPoint, param3: com.telerik.widget.chart.engine.dataPoints.DataPoint): javautilList<javalangObject>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module common {
						export module renderers {
							export class SplineRenderer extends com.telerik.widget.chart.visualization.common.renderers.LineRenderer {
								public preparePaths(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class DoughnutSegment extends com.telerik.widget.chart.visualization.pieChart.PieSegment {
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.pieChart.PieSegment.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.pieChart.PieUpdateContext.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class DoughnutSeries extends com.telerik.widget.chart.visualization.pieChart.PieSeries {
							public constructor();
							public setInnerRadiusFactor(param0: number): void;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public getInnerRadiusFactor(): number;
							public createUpdateContext(): com.telerik.widget.chart.visualization.pieChart.PieUpdateContext;
							public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public invalidatePalette(): void;
							public getCollectionIndex(): number;
							public setupUpdateContext(param0: com.telerik.android.common.math.RadRect): void;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public onDataBindingComplete(): void;
							public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public createSegment(): com.telerik.widget.chart.visualization.pieChart.PieSegment;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class DoughnutUpdateContext extends com.telerik.widget.chart.visualization.pieChart.PieUpdateContext {
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.PieDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.pieChart.PieSeries.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class PieSegment extends com.telerik.android.common.PropertyManager {
							public static FILL_COLOR_PROPERTY_KEY: number;
							public static STROKE_COLOR_PROPERTY_KEY: number;
							public static STROKE_THICKNESS_PROPERTY_KEY: number;
							public static ARC_COLOR_PROPERTY_KEY: number;
							public static ARC_THICKNESS_PROPERTY_KEY: number;
							public fillPaint: androidgraphicsPaint;
							public arcPaint: androidgraphicsPaint;
							public strokePaint: androidgraphicsPaint;
							public fillPath: androidgraphicsPath;
							public arcPath: androidgraphicsPath;
							public strokePath: androidgraphicsPath;
							public point: com.telerik.widget.chart.engine.dataPoints.PieDataPoint;
							public series: com.telerik.widget.chart.visualization.pieChart.PieSeries;
							public center: com.telerik.android.common.math.RadPoint;
							public getStrokeThickness(): number;
							public setArcThickness(param0: number): void;
							public getPoint(): com.telerik.widget.chart.engine.dataPoints.PieDataPoint;
							public setPoint(param0: com.telerik.widget.chart.engine.dataPoints.PieDataPoint): void;
							public getArcThickness(): number;
							public setStrokeColor(param0: number): void;
							public setStrokeThickness(param0: number): void;
							public getStrokeColor(): number;
							public hitTest(param0: androidgraphicsPointF): boolean;
							public setArcColor(param0: number): void;
							public setFillColor(param0: number): void;
							public getArcColor(): number;
							public getFillColor(): number;
							public getLocation(): com.telerik.android.common.math.RadPoint;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadSize.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.AngleRange.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.PieDataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBinding.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.DataPointBindingEntry.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ElementCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.ChartSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.series.PieSeriesModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.DataPointInfo.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartLayoutContext.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.pieChart.PieSegment.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.pieChart.PieUpdateContext.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class PieSeries extends com.telerik.widget.chart.visualization.common.ChartSeries {
							public static ARC_STROKE_WIDTH_KEY: string;
							public updateContext: com.telerik.widget.chart.visualization.pieChart.PieUpdateContext;
							public static DEFAULT_SELECTION_OFFSET: number;
							public setLabelFormat(param0: string): void;
							public setSliceOffset(param0: number): void;
							public getLabelFormat(): string;
							public getDisplayPercentage(): boolean;
							public createUpdateContext(): com.telerik.widget.chart.visualization.pieChart.PieUpdateContext;
							public createLabelRenderer(): com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer;
							public getDataPointColor(param0: number): number;
							public measureContent(param0: com.telerik.widget.chart.engine.elementTree.ChartNode, param1: javalangObject): com.telerik.android.common.math.RadSize;
							public getPointLocation(param0: com.telerik.widget.chart.engine.dataPoints.PieDataPoint): com.telerik.android.common.math.RadPoint;
							public onDataPointIsSelectedChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public onUIUpdated(): void;
							public setSliceStyles(param0: javautilList<javalangObject>): void;
							public getLegendTitle(param0: com.telerik.widget.chart.engine.dataPoints.PieDataPoint): string;
							public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
							public onBoundItemPropertyChanged(param0: com.telerik.widget.chart.engine.databinding.DataPointBindingEntry, param1: javabeansPropertyChangeEvent): void;
							public getRadiusFactor(): number;
							public findClosestPoint(param0: androidgraphicsPoint): com.telerik.widget.chart.visualization.behaviors.DataPointInfo;
							public onPointRemoved(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public getCollectionIndex(): number;
							public updateLegendItems(): void;
							public getValueBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
							public drawCore(param0: androidgraphicsCanvas): void;
							public createSegment(): com.telerik.widget.chart.visualization.pieChart.PieSegment;
							public refreshNode(param0: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public initDataBinding(): void;
							public getSelectedPointOffset(): number;
							public setLabelOffset(param0: number): void;
							public defaultPaletteFamily(): string;
							public onIsVisibleInLegendChanged(param0: boolean): void;
							public createModel(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
							public setNameBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
							public invalidatePalette(): void;
							public getSliceStyles(): javautilList<javalangObject>;
							public getSliceOffset(): number;
							public setupUpdateContext(param0: com.telerik.android.common.math.RadRect): void;
							public dataPoints(): com.telerik.widget.chart.engine.elementTree.ElementCollection;
							public hitTestDataPoint(param0: androidgraphicsPointF): com.telerik.widget.chart.engine.dataPoints.DataPoint;
							public setValueBinding(param0: com.telerik.widget.chart.engine.databinding.DataPointBinding): void;
							public setSelectedPointOffset(param0: number): void;
							public onDataBindingComplete(): void;
							public constructor();
							public setData(param0: javalangIterable<javalangObject>): void;
							public model(): com.telerik.widget.chart.engine.series.PieSeriesModel;
							public createDataSourceInstance(): com.telerik.widget.chart.engine.databinding.datasources.ChartSeriesDataSource;
							public onPointAdded(param0: number, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public getLabelOffset(): number;
							public getAngleRange(): com.telerik.widget.chart.engine.chartAreas.AngleRange;
							public updateUICore(param0: com.telerik.widget.chart.visualization.common.ChartLayoutContext): void;
							public model(): com.telerik.widget.chart.engine.series.ChartSeriesModel;
							public getNameBinding(): com.telerik.widget.chart.engine.databinding.DataPointBinding;
							public setRadiusFactor(param0: number): void;
							public hitTestDataPoint(param0: androidgraphicsPointF, param1: com.telerik.widget.chart.engine.dataPoints.DataPoint): boolean;
							public setAngleRange(param0: com.telerik.widget.chart.engine.chartAreas.AngleRange): void;
							public onDataPointSelectionChanged(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): void;
							public setDisplayPercentage(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.dataPoints.DataPoint.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.elementTree.ChartNode.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.ChartSeries.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.pieChart.PieSeries.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class PieSeriesLabelRenderer extends com.telerik.widget.chart.visualization.common.renderers.BaseLabelRenderer {
							public static RESET_COLOR: number;
							public constructor();
							public applyPalette(param0: com.telerik.widget.palettes.ChartPalette): void;
							public calculateLabelPoint(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint, param1: androidgraphicsRect): com.telerik.android.common.math.RadPoint;
							public setLabelTextColor(param0: number): void;
							public getLabelFontStyle(): number;
							public setLabelFormat(param0: string): void;
							public getLabelFillPaint(param0: number): androidgraphicsPaint;
							public renderLabel(param0: androidgraphicsCanvas, param1: com.telerik.widget.chart.engine.elementTree.ChartNode): void;
							public constructor(param0: com.telerik.widget.chart.visualization.common.ChartSeries);
							public getLabelFormat(): string;
							public setLabelFont(param0: androidgraphicsTypeface): void;
							public setLabelFontStyle(param0: number): void;
							public getLabelMargin(): number;
							public getLabelSize(): number;
							public getLabelValueToStringConverter(): com.telerik.android.common.Function;
							public getLabelText(param0: com.telerik.widget.chart.engine.dataPoints.DataPoint): string;
							public getLabelFont(): androidgraphicsTypeface;
							public setLabelValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public getLabelTextColor(): number;
							public constructor(param0: com.telerik.widget.chart.visualization.pieChart.PieSeries);
							public setLabelSize(param0: number): void;
							public setLabelMargin(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class PieUpdateContext {
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.telerik.android.common.ObservableCollection.d.ts" />
/// <reference path="./com.telerik.android.common.math.RadRect.d.ts" />
/// <reference path="./com.telerik.widget.chart.engine.chartAreas.ChartAreaModel.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartBehavior.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class RadPieChartView extends com.telerik.widget.chart.visualization.common.RadChartViewBase {
							public getZoomWidth(): number;
							public getPanOffsetY(): number;
							public getViewportHeight(): number;
							public createChartAreaModel(): com.telerik.widget.chart.engine.chartAreas.ChartAreaModel;
							public getViewportWidth(): number;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public constructor(param0: androidcontentContext);
							public getLegendInfos(): com.telerik.android.common.ObservableCollection;
							public validateBehaviourSupport(param0: com.telerik.widget.chart.visualization.behaviors.ChartBehavior): void;
							public onScale(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
							public getZoomHeight(): number;
							public getPanOffsetX(): number;
							public onScaleEnd(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
							public onScaleBegin(param0: com.telerik.widget.chart.visualization.behaviors.ChartScaleGestureDetector): boolean;
							public getPlotAreaClip(): com.telerik.android.common.math.RadRect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module chart {
				export module visualization {
					export module pieChart {
						export class SliceStyle {
							public constructor();
							public getStrokeWidth(): number;
							public setArcColor(param0: number): void;
							public getArcWidth(): number;
							public setFillColor(param0: number): void;
							public setStrokeColor(param0: number): void;
							public getArcColor(): number;
							public setStrokeWidth(param0: number): void;
							public setArcWidth(param0: number): void;
							public getFillColor(): number;
							public getStrokeColor(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module palettes {
				export class ChartColor {
					public static RED: number;
					public static BLACK: number;
					public static WHITE: number;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.android.common.ObservableCollection.d.ts" />
/// <reference path="./com.telerik.widget.chart.visualization.common.PresenterBase.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntry.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntryCollection.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module palettes {
				export class ChartPalette {
					public static PIE_FAMILY: string;
					public static AREA_FAMILY: string;
					public static BAR_FAMILY: string;
					public static LINE_FAMILY: string;
					public static POINT_FAMILY: string;
					public static OHLC_FAMILY: string;
					public static HORIZONTAL_AXIS_FAMILY: string;
					public static VERTICAL_AXIS_FAMILY: string;
					public static CARTESIAN_GRID_LINE_ANNOTATION: string;
					public static CARTESIAN_CUSTOM_ANNOTATION: string;
					public static CARTESIAN_PLOT_BAND_ANNOTATION: string;
					public static CARTESIAN_CHART_GRID: string;
					public static CARTESIAN_CHART_GRID_STRIPES: string;
					public static CARTESIAN_STROKED_ANNOTATION: string;
					public seriesEntries(): com.telerik.android.common.ObservableCollection;
					public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
					public constructor(param0: com.telerik.widget.palettes.ChartPalette);
					public getEntry(param0: com.telerik.widget.chart.visualization.common.PresenterBase, param1: number): com.telerik.widget.palettes.PaletteEntry;
					public getEntry(param0: string): com.telerik.widget.palettes.PaletteEntry;
					public getEntry(param0: string, param1: number): com.telerik.widget.palettes.PaletteEntry;
					public constructor();
					public getEntry(param0: com.telerik.widget.chart.visualization.common.PresenterBase): com.telerik.widget.palettes.PaletteEntry;
					public clone(): com.telerik.widget.palettes.ChartPalette;
					public clonePalette(): com.telerik.widget.palettes.ChartPalette;
					public isPredefined(): boolean;
					public entriesForFamily(param0: string): com.telerik.widget.palettes.PaletteEntryCollection;
					public globalEntries(): com.telerik.android.common.ObservableCollection;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
/// <reference path="./com.telerik.widget.palettes.PaletteEntryCollection.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module palettes {
				export class ChartPalettes {
					public static init(param0: androidcontentContext): void;
					public static darkSelected(): com.telerik.widget.palettes.ChartPalette;
					public static lightSelected(param0: androidcontentContext): com.telerik.widget.palettes.ChartPalette;
					public static generatePalette(param0: com.telerik.widget.palettes.PaletteEntryCollection): com.telerik.widget.palettes.ChartPalette;
					public static context(): androidcontentContext;
					public static darkSelected(param0: androidcontentContext): com.telerik.widget.palettes.ChartPalette;
					public static lightSelected(): com.telerik.widget.palettes.ChartPalette;
					public static light(): com.telerik.widget.palettes.ChartPalette;
					public static dark(): com.telerik.widget.palettes.ChartPalette;
					public static dark(param0: androidcontentContext): com.telerik.widget.palettes.ChartPalette;
					public static light(param0: androidcontentContext): com.telerik.widget.palettes.ChartPalette;
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.palettes.ChartPalette.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module palettes {
				export class PaletteChangedListener {
					/**
					 * Constructs a new instance of the com.telerik.widget.palettes.PaletteChangedListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
					});
					public onPaletteUpdated(param0: com.telerik.widget.palettes.ChartPalette): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module palettes {
				export class PaletteEntry extends javalangObject {
					public getStrokeWidth(): number;
					public setCustomValue(param0: string, param1: javalangObject): void;
					public getAdditionalStroke(): number;
					public getCustomValue(param0: string, param1: string): string;
					public setAdditionalStroke(param0: number): void;
					public clone(): com.telerik.widget.palettes.PaletteEntry;
					public getCustomValue(param0: string, param1: javalangObject): string;
					public setCustomValue(param0: string, param1: string): void;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
					public getAdditionalFill(): number;
					public setAdditionalFill(param0: number): void;
					public constructor();
					public constructor(param0: number, param1: number, param2: number);
					public setFill(param0: number): void;
					public setStroke(param0: number): void;
					public constructor(param0: com.telerik.widget.palettes.PaletteEntry);
					public getFill(): number;
					public getStroke(): number;
					public constructor(param0: number);
					public setStrokeWidth(param0: number): void;
					public getCustomValue(param0: string): string;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module palettes {
				export class PaletteEntryCollection extends com.telerik.android.common.ObservableCollection {
					public constructor();
					public getFamily(): string;
					public constructor(param0: com.telerik.widget.palettes.PaletteEntryCollection);
					public setFamily(param0: string): void;
					public clone(): com.telerik.widget.palettes.PaletteEntryCollection;
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.ObservableCollection.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class LegendInfoProvider {
						/**
						 * Constructs a new instance of the com.telerik.widget.primitives.legend.LegendInfoProvider interface with the provided implementation.
						 */
						public constructor(implementation: {
							getLegendInfos(): com.telerik.android.common.ObservableCollection;
						});
						public getLegendInfos(): com.telerik.android.common.ObservableCollection;
					}
				}
			}
		}
	}
}

/// <reference path="./java.beans.PropertyChangeListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class LegendItem {
						public constructor(param0: javalangObject);
						public setTitle(param0: string): void;
						public getFillColor(): number;
						public representedItem(): javalangObject;
						public getStrokeColor(): number;
						public setFillColor(param0: number): void;
						public setPropertyChangeListener(param0: javabeansPropertyChangeListener): void;
						public setStrokeColor(param0: number): void;
						public getPropertyChangeListener(): javabeansPropertyChangeListener;
						public toString(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendItem.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.RadLegendItemView.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class LegendItemListAdapter {
						public getItem(param0: number): com.telerik.widget.primitives.legend.LegendItem;
						public getItemCount(): number;
						public onBindViewHolder(param0: com.telerik.widget.primitives.legend.LegendItemListAdapter.ViewHolder, param1: number): void;
						public onCreateViewHolder(param0: androidviewViewGroup, param1: number): com.telerik.widget.primitives.legend.LegendItemListAdapter.ViewHolder;
						public constructor(param0: androidcontentContext, param1: javautilList<javalangObject>);
					}
					export module LegendItemListAdapter {
						export class ViewHolder {
							public constructor(param0: com.telerik.widget.primitives.legend.RadLegendItemView);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class LegendLinearLayoutManager {
						public constructor(param0: androidcontentContext, param1: number, param2: boolean);
						public constructor(param0: androidcontentContext);
						public setCanScrollVertically(param0: boolean): void;
						public setCanScrollHorizontally(param0: boolean): void;
						public canScrollHorizontally(): boolean;
						public canScrollVertically(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectableListener.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class LegendSelectable {
						/**
						 * Constructs a new instance of the com.telerik.widget.primitives.legend.LegendSelectable interface with the provided implementation.
						 */
						public constructor(implementation: {
							setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
							getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
							setIsSelected(param0: boolean): void;
							getIsSelected(): boolean;
						});
						public setSelectedChangeListener(param0: com.telerik.widget.primitives.legend.LegendSelectableListener): void;
						public getSelectedChangeListener(): com.telerik.widget.primitives.legend.LegendSelectableListener;
						public setIsSelected(param0: boolean): void;
						public getIsSelected(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class LegendSelectableListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.primitives.legend.LegendSelectableListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onLegendObjectSelected(param0: boolean): void;
						});
						public onLegendObjectSelected(param0: boolean): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class LegendSelectionListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.primitives.legend.LegendSelectionListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onLegendItemSelected(param0: javalangObject): void;
						});
						public onLegendItemSelected(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

import androidsupportv7widgetRecyclerView = android.support.v7.widget.RecyclerView;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class LegendTouchListener {
						public onInterceptTouchEvent(param0: androidsupportv7widgetRecyclerView, param1: androidviewMotionEvent): boolean;
						public constructor(param0: androidcontentContext, param1: androidsupportv7widgetRecyclerView, param2: com.telerik.widget.primitives.legend.LegendTouchListener.LegendItemClickListener);
						public onTouchEvent(param0: androidsupportv7widgetRecyclerView, param1: androidviewMotionEvent): void;
						public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					}
					export module LegendTouchListener {
						export class LegendItemClickListener {
							/**
							 * Constructs a new instance of the com.telerik.widget.primitives.legend.LegendTouchListener$LegendItemClickListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onItemClick(param0: androidviewView, param1: number): void;
							});
							public onItemClick(param0: androidviewView, param1: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendItem.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class RadLegendItemView {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public getIconView(): androidviewView;
						public setLegendItem(param0: com.telerik.widget.primitives.legend.LegendItem): void;
						public getTitleView(): androidwidgetTextView;
						public onLegendObjectSelected(param0: boolean): void;
						public propertyChange(param0: javabeansPropertyChangeEvent): void;
						public getLegendItem(): com.telerik.widget.primitives.legend.LegendItem;
					}
				}
			}
		}
	}
}

import androidwidgetFrameLayout = android.widget.FrameLayout;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendInfoProvider.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendItemListAdapter.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectable.d.ts" />
/// <reference path="./com.telerik.widget.primitives.legend.LegendSelectionListener.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module legend {
					export class RadLegendView extends androidwidgetFrameLayout implements com.telerik.android.common.CollectionChangeListener {
						public notifySelectedListeners(param0: com.telerik.widget.primitives.legend.LegendSelectable): void;
						public getLegendOrientation(): number;
						public addLegendItemSelectedListener(param0: com.telerik.widget.primitives.legend.LegendSelectionListener): void;
						public setItemViewLayout(param0: number): void;
						public getLegendTitleView(): androidwidgetTextView;
						public removeLegendItemSelectedListener(param0: com.telerik.widget.primitives.legend.LegendSelectionListener): void;
						public getLegendProvider(): com.telerik.widget.primitives.legend.LegendInfoProvider;
						public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
						public setLegendProvider(param0: com.telerik.widget.primitives.legend.LegendInfoProvider): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number, param3: number);
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setLegendOrientation(param0: number): void;
						public getItemViewLayout(): number;
						public createListViewAdapter(): com.telerik.widget.primitives.legend.LegendItemListAdapter;
						public constructor(param0: androidcontentContext);
						public setCanScrollVertically(param0: boolean): void;
						public setCanScrollHorizontally(param0: boolean): void;
					}
				}
			}
		}
	}
}

import androidviewKeyEvent = android.view.KeyEvent;
import androidosBundle = android.os.Bundle;
import androidviewaccessibilityAccessibilityNodeInfo = android.view.accessibility.AccessibilityNodeInfo;
import androidviewaccessibilityAccessibilityEvent = android.view.accessibility.AccessibilityEvent;
import androidosParcelable = android.os.Parcelable;
import androidosParcel = android.os.Parcel;
import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module primitives {
				export module panels {
					export class RadScrollView {
						public static SCROLLING_MODE_NONE: number;
						public static SCROLLING_MODE_VERTICAL: number;
						public static SCROLLING_MODE_HORIZONTAL: number;
						public static SCROLLING_MODE_BOTH: number;
						public measureChild(param0: androidviewView, param1: number, param2: number): void;
						public setSmoothScrollingEnabled(param0: boolean): void;
						public onTouchEvent(param0: androidviewMotionEvent): boolean;
						public fullScroll(param0: number): boolean;
						public onSaveInstanceState(): androidosParcelable;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onGenericMotionEvent(param0: androidviewMotionEvent): boolean;
						public shouldDelayChildPressedState(): boolean;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public addView(param0: androidviewView, param1: androidviewViewGroupLayoutParams): void;
						public computeHorizontalScrollOffset(): number;
						public requestChildRectangleOnScreen(param0: androidviewView, param1: androidgraphicsRect, param2: boolean): boolean;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
						public fling(param0: number, param1: number): void;
						public onMeasure(param0: number, param1: number): void;
						public computeVerticalScrollOffset(): number;
						public getMaxHorizontalScrollAmount(): number;
						public arrowScroll(param0: number): boolean;
						public smoothScrollTo(param0: number, param1: number): void;
						public measureChildWithMargins(param0: androidviewView, param1: number, param2: number, param3: number, param4: number): void;
						public smoothScrollBy(param0: number, param1: number): void;
						public requestChildFocus(param0: androidviewView, param1: androidviewView): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;
						public onRestoreInstanceState(param0: androidosParcelable): void;
						public getMaxVerticalScrollAmount(): number;
						public computeScrollDeltaToGetChildRectOnScreen(param0: androidgraphicsRect): androidgraphicsPoint;
						public requestLayout(): void;
						public constructor(param0: androidcontentContext);
						public isFillViewport(): boolean;
						public dispatchKeyEvent(param0: androidviewKeyEvent): boolean;
						public scrollTo(param0: number, param1: number): void;
						public draw(param0: androidgraphicsCanvas): void;
						public executeKeyEvent(param0: androidviewKeyEvent): boolean;
						public computeVerticalScrollRange(): number;
						public addView(param0: androidviewView, param1: number): void;
						public addView(param0: androidviewView, param1: number, param2: androidviewViewGroupLayoutParams): void;
						public onAttachedToWindow(): void;
						public getTopFadingEdgeStrength(): number;
						public onRequestFocusInDescendants(param0: number, param1: androidgraphicsRect): boolean;
						public computeScroll(): void;
						public getLeftFadingEdgeStrength(): number;
						public getScrollMode(): number;
						public onInitializeAccessibilityNodeInfo(param0: androidviewaccessibilityAccessibilityNodeInfo): void;
						public setFillViewport(param0: boolean): void;
						public getRightFadingEdgeStrength(): number;
						public getBottomFadingEdgeStrength(): number;
						public setScrollMode(param0: number): void;
						public onDetachedFromWindow(): void;
						public addView(param0: androidviewView): void;
						public isSmoothScrollingEnabled(): boolean;
						public setOverScrollMode(param0: number): void;
						public computeHorizontalScrollRange(): number;
						public pageScroll(param0: number): boolean;
						public performAccessibilityAction(param0: number, param1: androidosBundle): boolean;
						public onInitializeAccessibilityEvent(param0: androidviewaccessibilityAccessibilityEvent): void;
					}
					export module RadScrollView {
						export class SavedState {
							public xScrollPosition: number;
							public yScrollPosition: number;
							public static CREATOR: androidosParcelableCreator<javalangObject>;
							public writeToParcel(param0: androidosParcel, param1: number): void;
							public toString(): string;
							public constructor(param0: androidosParcel);
						}
					}
				}
			}
		}
	}
}



//------- android-support-v4 classes -------//

/// <reference path="./android.view.View.d.ts" />
declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorListener {
					/**
					 * Constructs a new instance of the android.support.v4.view.ViewPropertyAnimatorListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onAnimationStart(param0: android.view.View): void;
						onAnimationEnd(param0: android.view.View): void;
						onAnimationCancel(param0: android.view.View): void;
					});
					public onAnimationCancel(param0: android.view.View): void;
					public onAnimationStart(param0: android.view.View): void;
					public onAnimationEnd(param0: android.view.View): void;
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorUpdateListener {
					/**
					 * Constructs a new instance of the android.support.v4.view.ViewPropertyAnimatorUpdateListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onAnimationUpdate(param0: android.view.View): void;
					});
					public onAnimationUpdate(param0: android.view.View): void;
				}
			}
		}
	}
}

import javalangRunnable = java.lang.Runnable;
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorListener.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorUpdateListener.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorCompat {
					public withLayer(): android.support.v4.view.ViewPropertyAnimatorCompat;
					public alphaBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setStartDelay(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setDuration(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public xBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public start(): void;
					public rotationYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationZBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getDuration(): number;
					public rotationXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public withEndAction(param0: javalangRunnable): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getStartDelay(): number;
					public setListener(param0: android.support.v4.view.ViewPropertyAnimatorListener): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public zBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public alpha(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public yBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getInterpolator(): android.view.animation.Interpolator;
					public rotationY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public cancel(): void;
					public rotation(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setInterpolator(param0: android.view.animation.Interpolator): android.support.v4.view.ViewPropertyAnimatorCompat;
					public y(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public z(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public x(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorUpdateListener): android.support.v4.view.ViewPropertyAnimatorCompat;
					public withStartAction(param0: javalangRunnable): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationZ(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
				}
				export module ViewPropertyAnimatorCompat {
					export class BaseViewPropertyAnimatorCompatImpl {
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorUpdateListener): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorListener): void;
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
				}
			}
		}
	}
}

//------- android-support-v7-recyclerview classes -------//

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerViewAccessibilityDelegate.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class RecyclerView {
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static NO_POSITION: number;
					public static NO_ID: number;
					public static INVALID_TYPE: number;
					public static TOUCH_SLOP_DEFAULT: number;
					public static TOUCH_SLOP_PAGING: number;
					public static SCROLL_STATE_IDLE: number;
					public static SCROLL_STATE_DRAGGING: number;
					public static SCROLL_STATE_SETTLING: number;
					public onDraw(param0: android.graphics.Canvas): void;
					public getChildDrawingOrder(param0: number, param1: number): number;
					public addItemDecoration(param0: android.support.v7.widget.RecyclerView.ItemDecoration): void;
					public getChildAdapterPosition(param0: android.view.View): number;
					public scrollToPosition(param0: number): void;
					public removeItemDecoration(param0: android.support.v7.widget.RecyclerView.ItemDecoration): void;
					public onChildDetachedFromWindow(param0: android.view.View): void;
					public stopNestedScroll(): void;
					public computeHorizontalScrollExtent(): number;
					public getMinFlingVelocity(): number;
					public setAdapter(param0: android.support.v7.widget.RecyclerView.Adapter): void;
					public getAdapter(): android.support.v7.widget.RecyclerView.Adapter;
					public removeOnChildAttachStateChangeListener(param0: android.support.v7.widget.RecyclerView.OnChildAttachStateChangeListener): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public setRecycledViewPool(param0: android.support.v7.widget.RecyclerView.RecycledViewPool): void;
					public offsetChildrenHorizontal(param0: number): void;
					public isComputingLayout(): boolean;
					public addItemDecoration(param0: android.support.v7.widget.RecyclerView.ItemDecoration, param1: number): void;
					public onChildAttachedToWindow(param0: android.view.View): void;
					public removeDetachedView(param0: android.view.View, param1: boolean): void;
					public offsetChildrenVertical(param0: number): void;
					public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					public setScrollingTouchSlop(param0: number): void;
					public scrollTo(param0: number, param1: number): void;
					public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public getRecycledViewPool(): android.support.v7.widget.RecyclerView.RecycledViewPool;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public removeOnItemTouchListener(param0: android.support.v7.widget.RecyclerView.OnItemTouchListener): void;
					public invalidateItemDecorations(): void;
					public isAnimating(): boolean;
					public getChildItemId(param0: android.view.View): number;
					public findViewHolderForLayoutPosition(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public getChildPosition(param0: android.view.View): number;
					public getChildViewHolder(param0: android.view.View): android.support.v7.widget.RecyclerView.ViewHolder;
					public addFocusables(param0: javautilArrayList<javalangObject>, param1: number, param2: number): void;
					public setNestedScrollingEnabled(param0: boolean): void;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public stopScroll(): void;
					public requestLayout(): void;
					public hasPendingAdapterUpdates(): boolean;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public getItemAnimator(): android.support.v7.widget.RecyclerView.ItemAnimator;
					public computeVerticalScrollRange(): number;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public onScrolled(param0: number, param1: number): void;
					public setItemAnimator(param0: android.support.v7.widget.RecyclerView.ItemAnimator): void;
					public smoothScrollToPosition(param0: number): void;
					public constructor(param0: android.content.Context);
					public dispatchSaveInstanceState(param0: android.util.SparseArray<javalangObject>): void;
					public isNestedScrollingEnabled(): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public getChildLayoutPosition(param0: android.view.View): number;
					public dispatchNestedPreFling(param0: number, param1: number): boolean;
					public computeHorizontalScrollOffset(): number;
					public setHasFixedSize(param0: boolean): void;
					public findContainingViewHolder(param0: android.view.View): android.support.v7.widget.RecyclerView.ViewHolder;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public getScrollState(): number;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					public computeHorizontalScrollRange(): number;
					public onAttachedToWindow(): void;
					public setAccessibilityDelegateCompat(param0: android.support.v7.widget.RecyclerViewAccessibilityDelegate): void;
					public findViewHolderForItemId(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public swapAdapter(param0: android.support.v7.widget.RecyclerView.Adapter, param1: boolean): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public setItemViewCacheSize(param0: number): void;
					public computeVerticalScrollExtent(): number;
					public setChildDrawingOrderCallback(param0: android.support.v7.widget.RecyclerView.ChildDrawingOrderCallback): void;
					public addOnChildAttachStateChangeListener(param0: android.support.v7.widget.RecyclerView.OnChildAttachStateChangeListener): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public onScrollStateChanged(param0: number): void;
					public getCompatAccessibilityDelegate(): android.support.v7.widget.RecyclerViewAccessibilityDelegate;
					public getLayoutManager(): android.support.v7.widget.RecyclerView.LayoutManager;
					public computeVerticalScrollOffset(): number;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					public findContainingItemView(param0: android.view.View): android.view.View;
					public setLayoutFrozen(param0: boolean): void;
					public dispatchRestoreInstanceState(param0: android.util.SparseArray<javalangObject>): void;
					public clearOnChildAttachStateChangeListeners(): void;
					public setLayoutManager(param0: android.support.v7.widget.RecyclerView.LayoutManager): void;
					public findViewHolderForAdapterPosition(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public onSaveInstanceState(): android.os.Parcelable;
					public isAttachedToWindow(): boolean;
					public scrollBy(param0: number, param1: number): void;
					public getBaseline(): number;
					public findChildViewUnder(param0: number, param1: number): android.view.View;
					public clearOnScrollListeners(): void;
					public addOnScrollListener(param0: android.support.v7.widget.RecyclerView.OnScrollListener): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public setClipToPadding(param0: boolean): void;
					public fling(param0: number, param1: number): boolean;
					public draw(param0: android.graphics.Canvas): void;
					public findViewHolderForPosition(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public hasFixedSize(): boolean;
					public isLayoutFrozen(): boolean;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public setOnScrollListener(param0: android.support.v7.widget.RecyclerView.OnScrollListener): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public getMaxFlingVelocity(): number;
					public setRecyclerListener(param0: android.support.v7.widget.RecyclerView.RecyclerListener): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public smoothScrollBy(param0: number, param1: number): void;
					public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setViewCacheExtension(param0: android.support.v7.widget.RecyclerView.ViewCacheExtension): void;
					public addOnItemTouchListener(param0: android.support.v7.widget.RecyclerView.OnItemTouchListener): void;
					public startNestedScroll(param0: number): boolean;
					public hasNestedScrollingParent(): boolean;
					public removeOnScrollListener(param0: android.support.v7.widget.RecyclerView.OnScrollListener): void;
				}
				export module RecyclerView {
					export abstract class Adapter {
						public notifyItemMoved(param0: number, param1: number): void;
						public setHasStableIds(param0: boolean): void;
						public unregisterAdapterDataObserver(param0: android.support.v7.widget.RecyclerView.AdapterDataObserver): void;
						public createViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
						public hasStableIds(): boolean;
						public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
						public bindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
						public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number, param2: javautilList<javalangObject>): void;
						public onFailedToRecycleView(param0: android.support.v7.widget.RecyclerView.ViewHolder): boolean;
						public getItemId(param0: number): number;
						public onViewRecycled(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public notifyItemChanged(param0: number): void;
						public notifyItemInserted(param0: number): void;
						public onAttachedToRecyclerView(param0: android.support.v7.widget.RecyclerView): void;
						public constructor();
						public hasObservers(): boolean;
						public onViewAttachedToWindow(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public onViewDetachedFromWindow(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
						public getItemViewType(param0: number): number;
						public notifyItemRangeChanged(param0: number, param1: number): void;
						public notifyItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public notifyItemRangeRemoved(param0: number, param1: number): void;
						public onDetachedFromRecyclerView(param0: android.support.v7.widget.RecyclerView): void;
						public notifyDataSetChanged(): void;
						public notifyItemRangeInserted(param0: number, param1: number): void;
						public getItemCount(): number;
						public notifyItemChanged(param0: number, param1: javalangObject): void;
						public notifyItemRemoved(param0: number): void;
						public registerAdapterDataObserver(param0: android.support.v7.widget.RecyclerView.AdapterDataObserver): void;
					}
					export class AdapterDataObservable {
						public notifyItemMoved(param0: number, param1: number): void;
						public hasObservers(): boolean;
						public notifyItemRangeInserted(param0: number, param1: number): void;
						public notifyItemRangeChanged(param0: number, param1: number): void;
						public notifyItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public notifyChanged(): void;
						public notifyItemRangeRemoved(param0: number, param1: number): void;
					}
					export abstract class AdapterDataObserver {
						public onItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public constructor();
						public onChanged(): void;
						public onItemRangeMoved(param0: number, param1: number, param2: number): void;
						public onItemRangeChanged(param0: number, param1: number): void;
						public onItemRangeInserted(param0: number, param1: number): void;
						public onItemRangeRemoved(param0: number, param1: number): void;
					}
					export class ChildDrawingOrderCallback {
						/**
						 * Constructs a new instance of the android.support.v7.widget.RecyclerView$ChildDrawingOrderCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onGetChildDrawingOrder(param0: number, param1: number): number;
						});
						public onGetChildDrawingOrder(param0: number, param1: number): number;
					}
					export abstract class ItemAnimator {
						public static FLAG_CHANGED: number;
						public static FLAG_REMOVED: number;
						public static FLAG_INVALIDATED: number;
						public static FLAG_MOVED: number;
						public static FLAG_APPEARED_IN_PRE_LAYOUT: number;
						public setMoveDuration(param0: number): void;
						public animatePersistence(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
						public dispatchAnimationStarted(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public getMoveDuration(): number;
						public endAnimations(): void;
						public animateAppearance(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
						public isRunning(): boolean;
						public runPendingAnimations(): void;
						public animateDisappearance(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
						public onAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public getAddDuration(): number;
						public setAddDuration(param0: number): void;
						public canReuseUpdatedViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: javautilList<javalangObject>): boolean;
						public setChangeDuration(param0: number): void;
						public recordPostLayoutInformation(param0: android.support.v7.widget.RecyclerView.State, param1: android.support.v7.widget.RecyclerView.ViewHolder): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						public recordPreLayoutInformation(param0: android.support.v7.widget.RecyclerView.State, param1: android.support.v7.widget.RecyclerView.ViewHolder, param2: number, param3: javautilList<javalangObject>): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						public dispatchAnimationsFinished(): void;
						public getChangeDuration(): number;
						public constructor();
						public obtainHolderInfo(): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						public dispatchAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public canReuseUpdatedViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder): boolean;
						public endAnimation(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public setRemoveDuration(param0: number): void;
						public animateChange(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: android.support.v7.widget.RecyclerView.ViewHolder, param2: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param3: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
						public onAnimationStarted(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public isRunning(param0: android.support.v7.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
						public getRemoveDuration(): number;
					}
					export module ItemAnimator {
						export class AdapterChanges {
							/**
							 * Constructs a new instance of the android.support.v7.widget.RecyclerView$ItemAnimator$AdapterChanges interface with the provided implementation.
							 */
							public constructor(implementation: {
							});
						}
						export class ItemAnimatorFinishedListener {
							/**
							 * Constructs a new instance of the android.support.v7.widget.RecyclerView$ItemAnimator$ItemAnimatorFinishedListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onAnimationsFinished(): void;
							});
							public onAnimationsFinished(): void;
						}
						export class ItemAnimatorListener {
							/**
							 * Constructs a new instance of the android.support.v7.widget.RecyclerView$ItemAnimator$ItemAnimatorListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
							});
							public onAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						}
						export class ItemHolderInfo {
							public left: number;
							public top: number;
							public right: number;
							public bottom: number;
							public changeFlags: number;
							public constructor();
							public setFrom(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
							public setFrom(param0: android.support.v7.widget.RecyclerView.ViewHolder): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						}
					}
					export class ItemAnimatorRestoreListener {
						public onAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					}
					export abstract class ItemDecoration {
						public onDrawOver(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView, param2: android.support.v7.widget.RecyclerView.State): void;
						public constructor();
						public onDraw(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView): void;
						public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: android.support.v7.widget.RecyclerView, param3: android.support.v7.widget.RecyclerView.State): void;
						public onDraw(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView, param2: android.support.v7.widget.RecyclerView.State): void;
						public onDrawOver(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView): void;
						public getItemOffsets(param0: android.graphics.Rect, param1: number, param2: android.support.v7.widget.RecyclerView): void;
					}
					export abstract class LayoutManager {
						public onMeasure(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: number, param3: number): void;
						public isLayoutHierarchical(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): boolean;
						public measureChildWithMargins(param0: android.view.View, param1: number, param2: number): void;
						public onItemsRemoved(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
						public getPaddingBottom(): number;
						public onSaveInstanceState(): android.os.Parcelable;
						public onInitializeAccessibilityNodeInfoForItem(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.View, param3: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public addView(param0: android.view.View): void;
						public computeVerticalScrollExtent(param0: android.support.v7.widget.RecyclerView.State): number;
						public getRowCountForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
						public layoutDecorated(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public generateDefaultLayoutParams(): android.support.v7.widget.RecyclerView.LayoutParams;
						public constructor();
						public onDetachedFromWindow(param0: android.support.v7.widget.RecyclerView): void;
						public postOnAnimation(param0: javalangRunnable): void;
						public isAutoMeasureEnabled(): boolean;
						public onItemsAdded(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
						public getDecoratedBottom(param0: android.view.View): number;
						public isSmoothScrolling(): boolean;
						public detachAndScrapAttachedViews(param0: android.support.v7.widget.RecyclerView.Recycler): void;
						public getFocusedChild(): android.view.View;
						public requestLayout(): void;
						public onItemsMoved(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number, param3: number): void;
						public attachView(param0: android.view.View, param1: number): void;
						public removeAndRecycleAllViews(param0: android.support.v7.widget.RecyclerView.Recycler): void;
						public static getChildMeasureSpec(param0: number, param1: number, param2: number, param3: boolean): number;
						public generateLayoutParams(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.RecyclerView.LayoutParams;
						public getPaddingTop(): number;
						public computeHorizontalScrollOffset(param0: android.support.v7.widget.RecyclerView.State): number;
						public onAddFocusables(param0: android.support.v7.widget.RecyclerView, param1: javautilArrayList<javalangObject>, param2: number, param3: number): boolean;
						public getMinimumWidth(): number;
						public removeViewAt(param0: number): void;
						public getPaddingLeft(): number;
						public setMeasuredDimension(param0: number, param1: number): void;
						public isFocused(): boolean;
						public onItemsUpdated(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number, param3: javalangObject): void;
						public getDecoratedLeft(param0: android.view.View): number;
						public scrollHorizontallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
						public isMeasurementCacheEnabled(): boolean;
						public removeAndRecycleViewAt(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public assertInLayoutOrScroll(param0: string): void;
						public performAccessibilityAction(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: number, param3: android.os.Bundle): boolean;
						public onItemsChanged(param0: android.support.v7.widget.RecyclerView): void;
						public canScrollVertically(): boolean;
						public onDetachedFromWindow(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public getChildCount(): number;
						public getRightDecorationWidth(param0: android.view.View): number;
						public getWidthMode(): number;
						public getHeight(): number;
						public calculateItemDecorationsForChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public supportsPredictiveItemAnimations(): boolean;
						public removeAllViews(): void;
						public onScrollStateChanged(param0: number): void;
						public getItemCount(): number;
						public getColumnCountForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
						public findContainingItemView(param0: android.view.View): android.view.View;
						public removeAndRecycleView(param0: android.view.View, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public requestChildRectangleOnScreen(param0: android.support.v7.widget.RecyclerView, param1: android.view.View, param2: android.graphics.Rect, param3: boolean): boolean;
						public startSmoothScroll(param0: android.support.v7.widget.RecyclerView.SmoothScroller): void;
						public getLayoutDirection(): number;
						public getPosition(param0: android.view.View): number;
						public checkLayoutParams(param0: android.support.v7.widget.RecyclerView.LayoutParams): boolean;
						public detachAndScrapViewAt(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public setMeasurementCacheEnabled(param0: boolean): void;
						public computeHorizontalScrollExtent(param0: android.support.v7.widget.RecyclerView.State): number;
						public getItemViewType(param0: android.view.View): number;
						public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.RecyclerView.LayoutParams;
						public getBaseline(): number;
						public getTopDecorationHeight(param0: android.view.View): number;
						public setAutoMeasureEnabled(param0: boolean): void;
						public removeCallbacks(param0: javalangRunnable): boolean;
						public onRequestChildFocus(param0: android.support.v7.widget.RecyclerView, param1: android.view.View, param2: android.view.View): boolean;
						public addDisappearingView(param0: android.view.View, param1: number): void;
						public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
						public getPaddingRight(): number;
						public getChildAt(param0: number): android.view.View;
						public ignoreView(param0: android.view.View): void;
						public onInitializeAccessibilityEvent(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.accessibility.AccessibilityEvent): void;
						public offsetChildrenHorizontal(param0: number): void;
						public onFocusSearchFailed(param0: android.view.View, param1: number, param2: android.support.v7.widget.RecyclerView.Recycler, param3: android.support.v7.widget.RecyclerView.State): android.view.View;
						public onAdapterChanged(param0: android.support.v7.widget.RecyclerView.Adapter, param1: android.support.v7.widget.RecyclerView.Adapter): void;
						public removeView(param0: android.view.View): void;
						public detachAndScrapView(param0: android.view.View, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public onInitializeAccessibilityNodeInfo(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public getPaddingEnd(): number;
						public onLayoutChildren(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): void;
						public computeVerticalScrollRange(param0: android.support.v7.widget.RecyclerView.State): number;
						public getClipToPadding(): boolean;
						public onRequestChildFocus(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.View, param3: android.view.View): boolean;
						public attachView(param0: android.view.View, param1: number, param2: android.support.v7.widget.RecyclerView.LayoutParams): void;
						public static getChildMeasureSpec(param0: number, param1: number, param2: number, param3: number, param4: boolean): number;
						public isAttachedToWindow(): boolean;
						public addView(param0: android.view.View, param1: number): void;
						public attachView(param0: android.view.View): void;
						public setMeasuredDimension(param0: android.graphics.Rect, param1: number, param2: number): void;
						public removeDetachedView(param0: android.view.View): void;
						public endAnimation(param0: android.view.View): void;
						public offsetChildrenVertical(param0: number): void;
						public static getProperties(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number): android.support.v7.widget.RecyclerView.LayoutManager.Properties;
						public moveView(param0: number, param1: number): void;
						public getHeightMode(): number;
						public computeVerticalScrollOffset(param0: android.support.v7.widget.RecyclerView.State): number;
						public scrollToPosition(param0: number): void;
						public scrollVerticallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
						public assertNotInLayoutOrScroll(param0: string): void;
						public getDecoratedTop(param0: android.view.View): number;
						public onInterceptFocusSearch(param0: android.view.View, param1: number): android.view.View;
						public requestSimpleAnimationsInNextLayout(): void;
						public smoothScrollToPosition(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.State, param2: number): void;
						public computeHorizontalScrollRange(param0: android.support.v7.widget.RecyclerView.State): number;
						public performAccessibilityActionForItem(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.View, param3: number, param4: android.os.Bundle): boolean;
						public onItemsUpdated(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
						public getSelectionModeForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
						public hasFocus(): boolean;
						public getMinimumHeight(): number;
						public detachView(param0: android.view.View): void;
						public stopIgnoringView(param0: android.view.View): void;
						public measureChild(param0: android.view.View, param1: number, param2: number): void;
						public getBottomDecorationHeight(param0: android.view.View): number;
						public onAttachedToWindow(param0: android.support.v7.widget.RecyclerView): void;
						public getDecoratedMeasuredHeight(param0: android.view.View): number;
						public canScrollHorizontally(): boolean;
						public detachViewAt(param0: number): void;
						public static chooseSize(param0: number, param1: number, param2: number): number;
						public getWidth(): number;
						public addDisappearingView(param0: android.view.View): void;
						public getPaddingStart(): number;
						public getDecoratedRight(param0: android.view.View): number;
						public getLeftDecorationWidth(param0: android.view.View): number;
						public getDecoratedMeasuredWidth(param0: android.view.View): number;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public findViewByPosition(param0: number): android.view.View;
					}
					export module LayoutManager {
						export class Properties {
							public orientation: number;
							public spanCount: number;
							public reverseLayout: boolean;
							public stackFromEnd: boolean;
							public constructor();
						}
					}
					export class LayoutParams {
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public isItemChanged(): boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public isItemRemoved(): boolean;
						public getViewPosition(): number;
						public getViewAdapterPosition(): number;
						public isViewInvalid(): boolean;
						public constructor(param0: android.support.v7.widget.RecyclerView.LayoutParams);
						public getViewLayoutPosition(): number;
						public viewNeedsUpdate(): boolean;
						public constructor(param0: number, param1: number);
					}
					export class OnChildAttachStateChangeListener {
						/**
						 * Constructs a new instance of the android.support.v7.widget.RecyclerView$OnChildAttachStateChangeListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onChildViewAttachedToWindow(param0: android.view.View): void;
							onChildViewDetachedFromWindow(param0: android.view.View): void;
						});
						public onChildViewAttachedToWindow(param0: android.view.View): void;
						public onChildViewDetachedFromWindow(param0: android.view.View): void;
					}
					export class OnItemTouchListener {
						/**
						 * Constructs a new instance of the android.support.v7.widget.RecyclerView$OnItemTouchListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onInterceptTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
							onTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): void;
							onRequestDisallowInterceptTouchEvent(param0: boolean): void;
						});
						public onInterceptTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
						public onTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): void;
						public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					}
					export abstract class OnScrollListener {
						public constructor();
						public onScrolled(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
						public onScrollStateChanged(param0: android.support.v7.widget.RecyclerView, param1: number): void;
					}
					export class RecycledViewPool {
						public constructor();
						public putRecycledView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public clear(): void;
						public setMaxRecycledViews(param0: number, param1: number): void;
						public getRecycledView(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					}
					export class Recycler {
						public getViewForPosition(param0: number): android.view.View;
						public recycleView(param0: android.view.View): void;
						public constructor(param0: android.support.v7.widget.RecyclerView);
						public setViewCacheSize(param0: number): void;
						public getScrapList(): javautilList<javalangObject>;
						public clear(): void;
						public bindViewToPosition(param0: android.view.View, param1: number): void;
						public convertPreLayoutPositionToPostLayout(param0: number): number;
					}
					export class RecyclerListener {
						/**
						 * Constructs a new instance of the android.support.v7.widget.RecyclerView$RecyclerListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onViewRecycled(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						});
						public onViewRecycled(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					}
					export class RecyclerViewDataObserver extends android.support.v7.widget.RecyclerView.AdapterDataObserver {
						public onItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public onChanged(): void;
						public onItemRangeMoved(param0: number, param1: number, param2: number): void;
						public onItemRangeChanged(param0: number, param1: number): void;
						public onItemRangeInserted(param0: number, param1: number): void;
						public onItemRangeRemoved(param0: number, param1: number): void;
					}
					export class SavedState {
						public static CREATOR: android.os.Parcelable.Creator<javalangObject>;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
					export class SimpleOnItemTouchListener {
						public constructor();
						public onInterceptTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
						public onTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): void;
						public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					}
					export abstract class SmoothScroller {
						public onTargetFound(param0: android.view.View, param1: android.support.v7.widget.RecyclerView.State, param2: android.support.v7.widget.RecyclerView.SmoothScroller.Action): void;
						public constructor();
						public getChildCount(): number;
						public getLayoutManager(): android.support.v7.widget.RecyclerView.LayoutManager;
						public onSeekTargetStep(param0: number, param1: number, param2: android.support.v7.widget.RecyclerView.State, param3: android.support.v7.widget.RecyclerView.SmoothScroller.Action): void;
						public onChildAttachedToWindow(param0: android.view.View): void;
						public stop(): void;
						public isRunning(): boolean;
						public onStop(): void;
						public setTargetPosition(param0: number): void;
						public getChildPosition(param0: android.view.View): number;
						public instantScrollToPosition(param0: number): void;
						public isPendingInitialRun(): boolean;
						public normalize(param0: android.graphics.PointF): void;
						public getTargetPosition(): number;
						public findViewByPosition(param0: number): android.view.View;
						public onStart(): void;
					}
					export module SmoothScroller {
						export class Action {
							public static UNDEFINED_DURATION: number;
							public constructor(param0: number, param1: number);
							public setDuration(param0: number): void;
							public getInterpolator(): android.view.animation.Interpolator;
							public setDy(param0: number): void;
							public update(param0: number, param1: number, param2: number, param3: android.view.animation.Interpolator): void;
							public getDx(): number;
							public constructor(param0: number, param1: number, param2: number);
							public constructor(param0: number, param1: number, param2: number, param3: android.view.animation.Interpolator);
							public setDx(param0: number): void;
							public getDy(): number;
							public setInterpolator(param0: android.view.animation.Interpolator): void;
							public getDuration(): number;
							public jumpTo(param0: number): void;
						}
					}
					export class State {
						public constructor();
						public isMeasuring(): boolean;
						public toString(): string;
						public getTargetScrollPosition(): number;
						public willRunPredictiveAnimations(): boolean;
						public get(param0: number): javalangObject;
						public hasTargetScrollPosition(): boolean;
						public willRunSimpleAnimations(): boolean;
						public getItemCount(): number;
						public didStructureChange(): boolean;
						public isPreLayout(): boolean;
						public remove(param0: number): void;
						public put(param0: number, param1: javalangObject): void;
					}
					export module State {
						export class LayoutState {
							/**
							 * Constructs a new instance of the android.support.v7.widget.RecyclerView$State$LayoutState interface with the provided implementation.
							 */
							public constructor(implementation: {
							});
						}
					}
					export abstract class ViewCacheExtension {
						public constructor();
						public getViewForPositionAndType(param0: android.support.v7.widget.RecyclerView.Recycler, param1: number, param2: number): android.view.View;
					}
					export class ViewFlinger {
						public smoothScrollBy(param0: number, param1: number, param2: number): void;
						public run(): void;
						public constructor(param0: android.support.v7.widget.RecyclerView);
						public smoothScrollBy(param0: number, param1: number, param2: number, param3: number): void;
						public smoothScrollBy(param0: number, param1: number): void;
						public smoothScrollBy(param0: number, param1: number, param2: number, param3: android.view.animation.Interpolator): void;
						public fling(param0: number, param1: number): void;
						public stop(): void;
					}
					export abstract class ViewHolder {
						public itemView: android.view.View;
						public isRecyclable(): boolean;
						public getAdapterPosition(): number;
						public constructor(param0: android.view.View);
						public getItemViewType(): number;
						public setIsRecyclable(param0: boolean): void;
						public getPosition(): number;
						public getLayoutPosition(): number;
						public getOldPosition(): number;
						public toString(): string;
						public getItemId(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class RecyclerViewAccessibilityDelegate {
					public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					public constructor(param0: android.support.v7.widget.RecyclerView);
					public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
				}
			}
		}
	}
}