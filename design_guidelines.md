# Design Guidelines: 시니어 인생 명언 웹 애플리케이션

## Design Approach

**System**: Custom approach blending Apple HIG accessibility principles with Korean typography best practices, inspired by Calm.com's serene simplicity and Medium's reading-focused design.

**Core Principles**:
- Maximum readability and accessibility for seniors
- Warm, comforting emotional atmosphere
- Minimal cognitive load with clear visual hierarchy
- Respectful, dignified presentation

## Typography

**Font Selection**:
- Primary: Noto Sans KR (Google Fonts) - excellent Korean readability
- Weights: Regular (400), Medium (500), Bold (700)

**Type Scale**:
- Hero/Results: 2.5rem (40px) - 3.5rem (56px)
- Input Labels: 1.5rem (24px) - 2rem (32px)
- Body Text: 1.25rem (20px) - 1.5rem (24px)
- Helper Text: 1rem (16px) - 1.125rem (18px)
- Minimum text size: Never below 16px

**Line Height**: 1.7-1.8 for optimal Korean text readability

## Layout System

**Spacing Units**: Tailwind scale of 4, 6, 8, 12, 16, 20
- Section padding: py-16 to py-24
- Component gaps: gap-6 to gap-8
- Input spacing: p-6 to p-8

**Container Strategy**:
- Max-width: max-w-3xl (centered, focused)
- Single column layout throughout
- Generous padding: px-6 on mobile, px-8 on desktop

## Component Library

### Input Section
- Three large number input fields (0-100 range)
- Each input: min-h-20, text-center, extra-large text (text-3xl)
- Labels positioned above inputs with clear hierarchy
- Soft, rounded corners (rounded-xl)
- Focus states with thick, visible borders (border-4)

### Submit Button
- Prominent, full-width or large centered button
- Height: h-16 to h-20
- Rounded: rounded-full for friendly aesthetic
- Clear call-to-action text ("인생 명언 받기" or similar)

### Message Display Card
- Generous padding (p-12 to p-16)
- Centered text alignment
- Quote marks or decorative elements to frame the message
- Subtle elevation (shadow-lg)
- Rounded corners (rounded-2xl)

### Navigation/Header
- Minimal header with site title
- Optional "다시 시작" (restart) button after message display
- Clear, simple navigation without clutter

## Interaction Patterns

**Input Behavior**:
- Number-only keyboard on mobile
- Clear min/max indicators (0-100)
- Inline validation with gentle error messages
- Auto-focus progression between inputs (optional enhancement)

**Message Reveal**:
- Smooth transition when displaying result
- Message fades in or slides up gently
- No distracting animations - keep it calm and respectful

**States**:
- Clear disabled states for submit button until all inputs filled
- Hover states with subtle scale (hover:scale-105)
- Active states with slight press effect

## Page Structure

**Single-Page Application Flow**:

1. **Welcome/Input State** (initial view):
   - Centered welcome message (optional brief explanation)
   - Three number inputs in vertical stack
   - Submit button below

2. **Result State** (after submission):
   - Display inspirational message prominently
   - Show input numbers subtly as reference
   - "새로운 명언 받기" button to restart

**Viewport Management**:
- Content naturally flows, no forced 100vh constraints
- Center vertically when possible but allow natural scroll
- Minimum padding top/bottom for breathing room

## Accessibility Requirements

**Essential Features**:
- ARIA labels in Korean for all inputs
- High contrast ratios (minimum 4.5:1)
- Focus indicators visible and clear (outline-4)
- Touch targets minimum 44x44px
- Keyboard navigation fully supported
- Screen reader friendly structure

**Senior-Specific Considerations**:
- No time limits on interactions
- Forgiving input handling (trim whitespace, accept various number formats)
- Clear error messages in simple Korean
- Undo/restart always available

## Images

**No hero image required** - this application focuses on functionality and text clarity. If decorative elements are desired:
- Subtle background patterns (low opacity, non-distracting)
- Optional small icons next to input fields (calendar, heart, star representing life stages)
- Keep visual elements minimal to maintain focus on the message

## Responsive Behavior

**Mobile (base)**:
- Full-width inputs with p-6
- Stacked vertical layout
- Text sizes: base scale

**Tablet/Desktop (md: and up)**:
- Max-width container (max-w-3xl)
- Slightly larger padding and text
- Same vertical stacking (no multi-column for simplicity)

## Special Considerations

**Korean Language Optimization**:
- Ensure proper word-break rules for Korean text
- Use word-break: keep-all for better Korean line breaking
- Test thoroughly with various message lengths

**Emotional Design**:
- Warm, welcoming tone throughout
- Respectful presentation of wisdom
- Subtle celebratory feeling when message appears
- Dignified, never patronizing

**Performance**:
- Instant input feedback
- No loading states needed (message generation should be instantaneous)
- Smooth, gentle transitions only where they enhance experience