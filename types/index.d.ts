export interface PaginatorProps<T> {
    data: T[];
    scrollX: Animated.Value;
    currentSlide: number;
    containerStyle?: ViewStyle;
  }

  