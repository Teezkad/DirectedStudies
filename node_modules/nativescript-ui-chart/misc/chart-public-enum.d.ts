/**
 * Font styles
 */
export declare module FontStyles {
    var Normal: string;
    var Bold: string;
    var Italic: string;
    var BoldItalic: string;
}
export declare module DateTimeComponent {
    var Second: string;
    var Minute: string;
    var Hour: string;
    var Day: string;
    var Week: string;
    var Month: string;
    var Year: string;
}
/**
 * Defines whether a single or multiple items (series or points) can be selected in chart.
 */
export declare module ChartSelectionMode {
    /**
     *  Only a single item (series or point) can be selected at a time.
     */
    var Single: string;
    /**
     * Multiple series/points can be selected.
     */
    var Multiple: string;
    /**
     * Selection disabled.
     */
    var None: string;
}
export declare module ChartAnnotationZPosition {
    /**
    * The annotation is rendered below the series (default).
    */
    var BelowSeries: string;
    /**
    * The annotation is rendered above the series.
    */
    var AboveSeries: string;
}
export declare module PaletteEntryUseState {
    /**
     * The palette entry will be used when the series is not selected
     */
    var Normal: string;
    /**
     * The palette entry will be used when the series is selected
     */
    var Selected: string;
}
export declare module TrackballSnapMode {
    /**
     Only the closest point is selected.
     */
    var ClosestPoint: string;
    /**
     All points within the specified range are selected.
     */
    var AllClosestPoints: string;
}
export declare module AxisLabelFitMode {
    var None: string;
    var Multiline: string;
    var Rotate: string;
}
export declare module AxisLabelLayoutMode {
    var Outer: string;
    var Inner: string;
}
export declare module AxisHorizontalLocation {
    var Left: string;
    var Right: string;
}
export declare module AxisVerticalLocation {
    var Top: string;
    var Bottom: string;
}
export declare module AxisPlotMode {
    var BetweenTicks: string;
    var OnTicks: string;
}
export declare module ChartLegendPosition {
    var Left: string;
    var Right: string;
    var Top: string;
    var Bottom: string;
    var Floating: string;
}
export declare module ChartLegendOffsetOrigin {
    var TopLeft: string;
    var TopRight: string;
    var BottomLeft: string;
    var BottomRight: string;
}
export declare module knownCollections {
    var series: string;
    var entries: string;
    var palettes: string;
    var annotations: string;
}
export declare var seriesName: string;
export declare module AxisLabelVisibility {
    var Visible: string;
    var Hidden: string;
    var Clip: string;
}
