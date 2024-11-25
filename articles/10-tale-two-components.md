# ⚡️ Angular's Evolution: A Tale of Two Components

Hello Angular enthusiasts! 👋 Today, we're diving deep into the evolution of Angular components by comparing two versions of a component - the "old way" and the "new way". This comparison will showcase how modern Angular features have dramatically improved our code's clarity, reactivity, and maintainability.

## 🔍 Old Way vs New Way: A Full Comparison

**Old Way**

```typescript
@Component({
  selector: 'app-price',
  standalone: true,
  template: `
    <ng-container *transloco="let trans">
      <div class="bg-block-grey-01 p-6 rounded-lg max-w-md mx-auto">
        <!-- more code -->

        <ng-container *ngIf="options">
          <div class="flex justify-between mb-4 text-base">
            <span class="text-black-02-opacity">{{
              trans('OPTIONS_DESC')
            }}</span>
          </div>
        </ng-container>

        <hr class="border-white mb-4" />

        <div class="flex justify-between font-medium text-gray-900 text-base">
          <span>{{ trans('TOTAL') }}</span>
          <span>{{ total | currency: currency }}</span>
        </div>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent implements AfterViewInit {
  @Input({ required: true }) total!: string;
  @Input({ required: true }) tax!: string;
  @Input({ required: true }) currency!: string;
  @Input() options?: boolean;
  subtotal!: number;

  ngAfterViewInit(): void {
    this.calculateSubtotal();
  }

  private calculateSubtotal(): void {
    this.subtotal = parseFloat(this.total) - parseFloat(this.tax);
  }
}
```

**New Way**

```typescript
@Component({
  selector: 'app-price',
  standalone: true,
  template: `
    <ng-container *transloco="let trans">
      <div class="bg-block-grey-01 p-6 rounded-lg max-w-md mx-auto">
        <div class="flex justify-between mb-2 text-base">
          <span class="text-black-02-opacity">{{ trans('SUBTOTAL') }}</span>
          <span class="text-gray-700">{{
            subtotal() | currency: currency()
          }}</span>
        </div>

        <!-- more code -->

        @if (options()) {
          <div class="flex justify-between mb-4 text-base">
            <span class="text-black-02-opacity">{{
              trans('OPTIONS_DESC')
            }}</span>
          </div>
        }

        <hr class="border-white mb-4" />

        <div class="flex justify-between font-medium text-gray-900 text-base">
          <span>{{ trans('TOTAL') }}</span>
          <span>{{ total() | currency: currency() }}</span>
        </div>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent {
  total = input.required<string>();
  tax = input.required<string>();
  currency = input.required<string>();
  options = input<boolean>();

  subtotal = computed(() => parseFloat(this.total()) - parseFloat(this.tax()));
}
```

## 🌟 Key Improvements

1. **Declarative Inputs**

   - Old: @Input() decorators, with the ! (non-null assertion operator), despite the required.
   - New: input() - signals based - with built-in required/optional distinctions.

2. **Reactive Computed Values**

   - Old: Calculated in ngAfterViewInit(), requiring manual updates
   - New: computed() property, automatically recalculating when dependencies change

3. **Template Syntax**

   - Old: Traditional structural directive, \*ngIf for conditional rendering
   - New: Modern @if syntax for cleaner conditional logic

4. **Component Logic**
   - Old: Separate method for subtotal calculation, lifecycle hook dependency
   - New: Inline computation, no explicit lifecycle management needed

## 💡 Why This Matters

1. **Readability**: The new approach clearly shows component inputs and derived values at a glance.
2. **Maintainability**: Less code means fewer places for bugs to hide.
3. **Reactivity**: Changes to inputs automatically trigger recalculations, ensuring data consistency.
4. **Performance**: OnPush change detection works seamlessly with signals and computed values.

## 🚀 The Beauty of Modern Components

Modern Angular components are:

1. **More Declarative**: The component's API is clear from its class definition.
2. **Self-Contained**: Inputs and computations are encapsulated within the component.
3. **Reactive by Default**: Changes propagate automatically through the component.
4. **Concise**: Achieve more functionality with less code.

## 🤔 Embracing the Future

As we can see, the evolution of Angular has led to components that are not just more beautiful in terms of code aesthetics, but also in their functionality and maintainability.

The declarative nature of the new approach aligns perfectly with Angular's goal of making development more intuitive and efficient.

What are your thoughts on this evolution? Have you started using these modern features in your projects? Let's discuss the impact of these changes on your development experience!

#Angular #WebDevelopment #FrontEndEvolution #TypeScript #ModernJavaScript

---

_Impressed by the evolution of Angular components? Give this post a like and share your experiences with modernizing your Angular codebase!_
