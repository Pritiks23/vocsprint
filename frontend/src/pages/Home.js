import React from 'react';


import { Container, Typography, Grid } from '@mui/material';
import TrainingModuleCard from '../components/TrainingModuleCard';

const trainings = [
  {
    title: 'Electrician Training',
    description: 'Hands-on modules for wiring, circuits, safety, and smart systems. Includes AR/VR practice and AI step-by-step coaching.',
    lessons: [
      { 
        title: 'Intro to Electrical Safety', 
        content: 'Learn about PPE, lockout/tagout, and safe work practices.',
        fullContent: `**Electrical Safety Fundamentals**

Welcome to the first lesson in your electrician training journey. Safety is the foundation of all electrical work, and mastering these principles will protect you and those around you throughout your career.

**Personal Protective Equipment (PPE)**

Proper PPE is your first line of defense against electrical hazards. Essential equipment includes:

- Insulated gloves rated for the voltage you'll be working with
- Safety glasses with side shields to protect from arc flash
- Flame-resistant clothing (FR-rated shirts and pants)
- Steel-toed boots with electrical hazard (EH) rating
- Hard hat with Class E rating for electrical work
- Hearing protection for loud environments

**Lockout/Tagout (LOTO) Procedures**

LOTO is a critical safety protocol that ensures equipment is properly shut down and cannot be restarted during maintenance:

1. Identify all energy sources connected to the equipment
2. Notify all affected employees before shutdown
3. Shut down the equipment using normal procedures
4. Isolate the equipment from energy sources
5. Apply lockout/tagout devices to energy-isolating devices
6. Release or restrain all stored energy
7. Verify isolation by testing equipment operation

**Safe Work Practices**

Always follow these fundamental safety rules:

- Test before touch: Use a voltage tester to verify circuits are de-energized
- Maintain the three-foot rule: Keep a safe distance from energized parts
- Work with a buddy when possible, especially on complex or dangerous tasks
- Keep your work area clean and well-lit
- Never bypass safety devices or take shortcuts
- Stay alert and avoid fatigue—tired electricians make dangerous mistakes

**Arc Flash Awareness**

Arc flash is one of the most dangerous electrical hazards. It can cause:

- Severe burns from temperatures reaching 35,000°F
- Pressure waves that can throw workers
- Intense light causing vision damage
- Loud noise causing hearing damage

Always check for arc flash labels on equipment and wear appropriate PPE rated for the hazard level.

**Emergency Response**

Know what to do in case of electrical accidents:

- For electrical fires: Use a Class C fire extinguisher, never water
- For electrocution: Do NOT touch the victim if still in contact with electricity
- Shut off power at the source if possible
- Call 911 immediately
- Begin CPR if trained and the victim is not breathing

Remember: Your safety and the safety of others always comes first. If something doesn't feel right, stop and reassess the situation.`
      },
      { 
        title: 'Basic Wiring', 
        content: 'Understand wiring diagrams, color codes, and hands-on wire connections.',
        fullContent: `**Basic Wiring Fundamentals**

Understanding electrical wiring is essential for any electrician. This lesson covers the core concepts you'll use every day on the job.

**Wire Color Codes (North American Standard)**

Knowing wire color codes is crucial for safety and proper installation:

- **Black**: Hot wire (carries current from the source)
- **Red**: Hot wire (second hot in 220V circuits or three-way switches)
- **White**: Neutral wire (returns current to the source)
- **Green or Bare Copper**: Ground wire (safety wire that prevents shocks)
- **Blue/Yellow**: Hot wires in commercial applications

**Never assume wire colors are correct in existing installations—always test!**

**Wire Gauge and Ampacity**

Wire thickness (gauge) determines how much current it can safely carry:

- 14 AWG: 15 amps (lights, outlets on 15A breakers)
- 12 AWG: 20 amps (kitchen outlets, bathrooms)
- 10 AWG: 30 amps (water heaters, dryers)
- 8 AWG: 40 amps (electric ranges)
- 6 AWG: 55 amps (central AC units)

Remember: Lower gauge numbers mean thicker wire and higher ampacity.

**Reading Wiring Diagrams**

Wiring diagrams are the blueprints of electrical systems. Key symbols include:

- Circle with X: Light fixture
- Circle split in half: Switched outlet
- S: Switch
- S3: Three-way switch
- Parallel lines: Wires running together
- Dots at intersections: Wires connected
- Crossover without dot: Wires not connected

**Making Safe Wire Connections**

Proper connections are critical for safety and reliability:

**Stripping Wire:**
1. Use wire strippers, not knife or teeth
2. Strip 1/2 to 3/4 inch of insulation
3. Don't nick the copper conductor
4. Keep stripped length consistent

**Pigtail Connections:**
1. Strip all wires to the same length
2. Hold wires parallel with ends aligned
3. Twist wires together clockwise
4. Trim twisted end if needed
5. Screw on wire nut, twisting clockwise until tight
6. Tug each wire to verify connection

**Screw Terminal Connections:**
1. Form a hook in the wire end using needle-nose pliers
2. Hook should curve clockwise around the screw
3. Place hook under screw head
4. Tighten screw clockwise so hook closes
5. No bare wire should be exposed outside the connection

**Wire Organization Best Practices**

- Bundle wires neatly with zip ties or cable management
- Leave 6 inches of wire at each box for connections
- Label wires at both ends for complex runs
- Secure cables every 4.5 feet and within 12 inches of boxes
- Avoid sharp bends that could damage insulation

**Common Wiring Mistakes to Avoid**

- Backstabbing outlets (push-in connections) instead of using screw terminals
- Over-tightening wire nuts, causing wire breaks
- Mixing wire gauges on the same circuit
- Not leaving enough wire in boxes
- Running too many wires through a single conduit

Practice makes perfect! Start with simple circuits and gradually work up to more complex installations. Always double-check your work before energizing any circuit.`
      },
      { 
        title: 'Circuits & Breakers', 
        content: 'Explore circuit types, breaker panels, and troubleshooting.',
        fullContent: `**Understanding Electrical Circuits and Breaker Panels**

Circuits are the backbone of electrical systems, and knowing how to work with them safely is fundamental to your success as an electrician.

**Circuit Types**

**Series Circuits:**
- Components connected end-to-end in a single path
- Current is the same throughout
- Voltage divides across components
- If one component fails, entire circuit stops working
- Rarely used in residential wiring

**Parallel Circuits:**
- Components connected across the same voltage source
- Voltage is the same across all components
- Current divides among paths
- If one component fails, others continue working
- Standard for residential and commercial wiring

**Branch Circuits:**
Branch circuits are individual circuits that run from the service panel to outlets, lights, and appliances:

- **15-Amp Circuits**: Lighting and basic outlets (14 AWG wire)
- **20-Amp Circuits**: Kitchen, bathroom, laundry outlets (12 AWG wire)
- **Dedicated Circuits**: Single appliance (AC, water heater, etc.)
- **GFCI Circuits**: Protection against ground faults in wet areas
- **AFCI Circuits**: Protection against arc faults (required in bedrooms)

**Understanding Breaker Panels**

The breaker panel (service panel or load center) is the heart of your electrical system:

**Main Components:**
- **Main Breaker**: Disconnects power to entire panel (usually 100-200 amps)
- **Bus Bars**: Copper bars that distribute power to branch breakers
- **Branch Breakers**: Individual circuit protection
- **Neutral Bus**: Where neutral wires terminate
- **Ground Bus**: Where ground wires terminate

**Types of Breakers:**

**Single-Pole Breakers (120V):**
- Standard 15A or 20A breakers
- One hot wire connection
- Takes up one slot in panel
- Powers lights and basic outlets

**Double-Pole Breakers (240V):**
- 30A, 40A, 50A common ratings
- Two hot wire connections
- Takes up two slots in panel
- Powers appliances like dryers, ranges, AC units

**GFCI Breakers:**
- Protects entire circuit from ground faults
- Trips if current leakage exceeds 5 milliamps
- Required for bathrooms, kitchens, outdoor circuits
- Has test button on breaker itself

**AFCI Breakers:**
- Detects dangerous arcing conditions
- Required in bedrooms, living rooms (NEC 2020)
- More sensitive than standard breakers
- Reduces fire risk

**Breaker Panel Safety**

Working inside panels is dangerous and requires extra caution:

- **Never work on an energized panel** unless you're trained and have proper PPE
- Main lugs and meter connections remain energized even with main breaker off
- Use insulated tools rated for electrical work
- Wear rubber-soled shoes and stand on dry surface
- Keep one hand behind your back when working to avoid creating a path through your heart

**Circuit Troubleshooting**

When a circuit isn't working, follow this systematic approach:

**Step 1: Identify the Problem**
- Circuit completely dead?
- Intermittent power?
- Breaker tripping repeatedly?
- GFCI/AFCI won't reset?

**Step 2: Check the Breaker**
- Is breaker in tripped position (middle position)?
- Reset by turning fully OFF then ON
- If trips immediately, there's a short circuit or overload

**Step 3: Test for Voltage**
- Use multimeter or non-contact voltage tester
- Test at breaker, then at outlets along circuit
- Helps locate where power stops

**Step 4: Common Issues and Solutions**

**Overloaded Circuit:**
- Too many devices on one circuit
- Solution: Redistribute load or add new circuit

**Short Circuit:**
- Hot and neutral wires touching
- Causes immediate breaker trip
- Solution: Find and repair damaged wire or device

**Ground Fault:**
- Current leaking to ground
- Trips GFCI protection
- Solution: Find moisture or damaged insulation

**Loose Connection:**
- Wires not properly tightened
- Causes arcing and heat
- Solution: Turn off power, tighten all connections

**Faulty Breaker:**
- Breaker itself has failed
- Won't reset or trips without load
- Solution: Replace breaker

**Proper Circuit Loading**

To prevent overloading, follow the 80% rule:
- 15A circuit: Max 12A continuous load (1,440W)
- 20A circuit: Max 16A continuous load (1,920W)
- 30A circuit: Max 24A continuous load (2,880W)

**Panel Labeling**

Always label circuits clearly:
- "Kitchen Outlets East Wall"
- "Master Bedroom Lights"
- "Garage & Outdoor Outlets"

Good labels save time and prevent dangerous mistakes.

Remember: When in doubt about a circuit problem, call a licensed electrician or your supervisor. Electrical troubleshooting requires experience and judgment that develops over time.`
      },
      { 
        title: 'Smart Home Systems', 
        content: 'Install and configure smart switches, outlets, and lighting.',
        fullContent: `**Smart Home Electrical Systems**

Smart home technology is revolutionizing residential electrical work. As an electrician, understanding these systems opens up new opportunities and makes you more valuable to clients.

**Overview of Smart Home Devices**

Smart devices connect to WiFi or hub systems to enable remote control and automation. Common categories include:

- Smart switches and dimmers
- Smart outlets and plugs
- Smart light bulbs
- Smart thermostats
- Smart doorbells and security cameras
- Smart smoke/CO detectors
- Whole-home automation hubs

**Prerequisites for Smart Home Installation**

Before installing smart devices, verify these requirements:

**Strong WiFi Coverage:**
- Test signal strength in all installation locations
- 2.4GHz band typically used (better range than 5GHz)
- Recommend mesh WiFi systems for large homes
- Some devices require 2.4GHz-only network (can't auto-switch to 5GHz)

**Neutral Wires:**
- Most smart switches require neutral wire connection
- Older homes may lack neutrals in switch boxes
- Options: Pull neutral wire, use smart bulbs instead, or install neutral-less smart switches

**Proper Electrical Boxes:**
- Smart devices are larger than standard switches
- Deep boxes (2.5" or 3.5") work best
- Metal boxes may interfere with WiFi signal
- Consider plastic boxes for renovations

**Installing Smart Switches**

**Standard Installation Process:**

1. **Turn Off Power**
   - Flip breaker off
   - Test with voltage tester to confirm

2. **Remove Old Switch**
   - Unscrew from box
   - Note wire connections (take photo if needed)
   - Typical: black (hot), white (neutral), green/bare (ground)

3. **Identify Wires**
   - Line (hot from panel): typically black, always hot
   - Load (hot to fixture): black or red
   - Neutral: white wire bundle
   - Ground: green or bare copper

4. **Connect Smart Switch**
   - Line to "Line" terminal (usually black wire)
   - Load to "Load" terminal
   - Neutral to "Neutral" terminal (white)
   - Ground to "Ground" terminal (green screw)

5. **Secure and Test**
   - Tuck wires carefully into box
   - Screw switch to box
   - Install faceplate
   - Turn power on
   - Follow manufacturer's pairing instructions

**Three-Way Smart Switch Installation**

Three-way circuits are trickier with smart devices. Two main approaches:

**Replace Both Switches:**
- Use smart switches designed for three-way circuits
- One is "master" (has load connection)
- Other is "auxiliary" or "add-on" (no load connection)
- They communicate wirelessly, not through traveler wires

**Replace One Switch Only:**
- Install smart switch at location with line and load
- Install "dummy" switch or smart remote at other location
- Simpler installation but may have slight lag

**Smart Lighting Systems**

Multiple approaches to smart lighting:

**Smart Switches (Recommended for Electricians):**
- Replace wall switch with smart version
- Works with any existing bulbs
- Centralized control point
- Professional appearance

**Smart Bulbs:**
- Screw into existing fixtures
- Keep wall switch always on
- Good for lamps and hard-to-reach switches
- Each bulb adds to cost

**Smart Outlets**

Easier to install than switches:
- Standard installation like regular outlet
- Often have mix of smart and always-on outlets
- Great for lamps, fans, seasonal decorations
- Some monitor energy usage

**Common Smart Home Protocols**

**WiFi:**
- Direct connection to home network
- No hub required
- Widest compatibility
- Can congest network with many devices

**Zigbee:**
- Low-power mesh network
- Requires hub (SmartThings, Alexa Plus, etc.)
- Devices repeat signal, extending range
- Better for large deployments

**Z-Wave:**
- Mesh network with better range than Zigbee
- Requires hub
- Less interference (different frequency)
- More expensive devices

**Thread/Matter:**
- New standard for interoperability
- Designed to work across ecosystems
- Future-proof choice
- Still emerging

**Popular Smart Home Ecosystems**

**Amazon Alexa:**
- Works with most brands
- Voice control with Echo devices
- Routines for automation

**Google Home:**
- Strong voice recognition
- Integrates with Google services
- Works with most major brands

**Apple HomeKit:**
- Privacy-focused
- Higher security requirements for devices
- Fewer compatible devices
- Premium pricing

**Samsung SmartThings:**
- Powerful automation
- Works with most protocols
- Requires separate hub

**Troubleshooting Smart Devices**

**Device Won't Connect:**
- Check WiFi signal strength
- Verify 2.4GHz network is available
- Reset device to factory settings
- Check router firewall settings

**Device Not Responding:**
- Power cycle device and router
- Check if hub (if used) is online
- Verify app is updated
- Check for firmware updates

**Intermittent Connection:**
- Too many devices on network
- Interference from other electronics
- Weak WiFi signal
- Need mesh network or WiFi extender

**Smart Home Best Practices**

- Document which devices are on which circuits
- Use dedicated circuit for critical hubs
- Label smart devices in panel schedule
- Provide client with written instructions
- Test all devices before leaving job site
- Recommend UPS backup for hubs and routers
- Create automation backups when possible

**Business Opportunities**

Smart home installation services offer electricians:
- Higher hourly rates ($75-150/hour)
- Recurring service calls for updates/additions
- Differentiation from competitors
- Entry point for younger tech-savvy homeowners
- Referral opportunities to friends/family

Position yourself as the "smart home electrician" in your area and watch your business grow!`
      },
      { 
        title: 'Conduit Bending', 
        content: 'Practice bending conduit for clean, code-compliant installations.',
        fullContent: `**Conduit Bending Mastery**

Conduit bending is both an art and a science. Professional-looking bends demonstrate craftsmanship and ensure code compliance while making wire pulling easier.

**Types of Conduit**

**EMT (Electrical Metallic Tubing):**
- Lightweight, thin-walled
- Most common in commercial work
- Easiest to bend
- Not threaded, uses set-screw fittings
- Available in 1/2", 3/4", 1", and larger

**IMC (Intermediate Metal Conduit):**
- Thicker wall than EMT
- Threaded fittings
- Suitable for outdoor use
- Heavier and more rigid

**Rigid Metal Conduit:**
- Thickest wall
- Maximum protection
- Threaded fittings
- Used in harsh environments

**PVC Conduit:**
- Non-metallic
- Bent using heat
- Commonly used underground
- Not covered in this lesson

**Bending Tools**

**Hand Benders:**
- Used for 1/2" to 1" EMT
- Most common tool for electricians
- Costs $30-100
- Consists of foot pedal and handle

**Mechanical Benders:**
- Used for larger conduit
- Hydraulic or ratcheting
- More expensive but necessary for big pipe

**Essential Conduit Bending Terms**

**Stub-Up (90° Bend):**
- Vertical rise from floor to box
- Most basic bend

**Back-to-Back Bend:**
- Two 90° bends in opposite directions
- Creates U-shape

**Offset:**
- Two bends that move conduit parallel to original path
- Overcomes obstacles

**Saddle:**
- Three bends that go over an obstacle
- Conduit returns to original level

**Kick:**
- Small bend to move conduit slightly
- Often used at boxes

**Understanding the Bender**

Your hand bender has several key markings:

**Arrow:**
- Marks center of bend
- Use for stub-ups and back-to-back bends

**Star:**
- Marks back of 90° bend
- Use for precise measurements

**Notch/Rim:**
- Used for saddle bends
- Center of the three bends

**Degree Marks:**
- Show angle of bend
- Common: 10°, 22.5°, 30°, 45°, 60°

**Stub-Up (90° Bend)**

Most fundamental bend every electrician must master:

**Step 1: Calculate Deduction**
- For 1/2" EMT: 5" deduction
- For 3/4" EMT: 6" deduction
- For 1" EMT: 8" deduction

**Step 2: Mark Conduit**
- Desired height + deduction = mark from end
- Example: 12" stub + 5" deduction = 17" mark

**Step 3: Align and Bend**
- Place arrow on bender at mark
- Apply pressure smoothly on foot pedal
- Pull handle steadily until level is at 90°
- Don't overbend then bend back (weakens pipe)

**Step 4: Check**
- Use level to verify 90°
- Measure actual height from floor
- Adjust if needed (better to slightly underbend and finish than overbend)

**Offset Bends**

Used to navigate around obstacles:

**Common Offset Angles:**
- 10° offset: Multiplier 6.0
- 22.5° offset: Multiplier 2.6
- 30° offset: Multiplier 2.0
- 45° offset: Multiplier 1.4

**Calculating Offset Distance:**
- Measure height to clear obstacle
- Multiply by angle multiplier
- Result is distance between bends

**Example: 30° Offset for 4" Height:**
- 4" × 2.0 = 8" between bends

**Step 1: Mark First Bend**
- Measure from end to first bend location
- Mark conduit

**Step 2: Make First Bend**
- Align bender to mark
- Bend to desired angle (30°)

**Step 3: Mark Second Bend**
- Measure calculated distance (8")
- Mark for second bend

**Step 4: Make Second Bend**
- Flip conduit 180°
- Align bender to second mark
- Bend same angle in opposite direction
- Should be parallel to original path

**Three-Bend Saddles**

Navigate over pipes or obstacles while maintaining level:

**Center Bend: 45°**
**Outside Bends: 22.5° each**

**Saddle Multipliers:**
- For 45° center: Height × 2.5 = outside bend spacing
- Example: 3" obstacle × 2.5 = 7.5" between bends

**Step 1: Mark Center**
- Where obstacle is located

**Step 2: Make Center Bend**
- 45° bend at center mark

**Step 3: Mark Outside Bends**
- Measure 7.5" on each side of center

**Step 4: Make Outside Bends**
- 22.5° bends, opposite direction of center
- Should create smooth saddle shape

**Back-to-Back Bends**

Creates U-shape for conduit routing:

**Step 1: Make First 90°**
- Standard stub-up technique

**Step 2: Measure for Second Bend**
- Measure from back of first bend
- Add distance needed between bends

**Step 3: Make Second Bend**
- Flip conduit
- Align bender with mark
- Bend to 90° in opposite direction

**Bending Tips for Professionals**

**General Techniques:**
- Apply steady, consistent pressure
- Don't jerk or force the bend
- One smooth motion is better than multiple adjustments
- Use your body weight, not just arms
- Keep conduit flat on ground during bend

**Avoiding Common Mistakes:**

**Kinking:**
- Bending too quickly
- Foot not properly placed on pedal
- Solution: Slow, steady pressure

**Dog Legs:**
- Bends not in same plane
- Rotating conduit during multi-bend sequences
- Solution: Mark a reference line along conduit length

**Ovalized Pipe:**
- Bending too tightly
- Using wrong size bender
- Solution: Use proper tool, don't exceed bend radius

**Code Requirements**

**National Electrical Code (NEC) Requirements:**

**Maximum Degrees Between Pull Points:**
- Total of 360° in any conduit run
- Must have pull box or access point after 360°
- Counts all bends, even small ones

**Minimum Bend Radius:**
- EMT 1/2": 4" radius
- EMT 3/4": 4.5" radius
- EMT 1": 5.25" radius
- Hand benders automatically create proper radius

**Support Requirements:**
- Secure within 3 feet of box or fitting
- Support every 10 feet for horizontal runs
- Use proper straps or hangers

**Practice Exercises**

**Beginner:**
1. Ten perfect 90° stubs of varying heights
2. Mark practice pipe in 1-foot increments, make stub at each mark
3. Goal: ±1/4" accuracy

**Intermediate:**
1. Offset bends at 10°, 22.5°, 30°, 45°
2. Different heights: 2", 4", 6"
3. Goal: Parallel runs, no dog legs

**Advanced:**
1. Three-bend saddles over pipe obstacles
2. Back-to-back bends for receptacle drops
3. Complex runs combining multiple bend types

**Field Tips**

- Always carry extra conduit for practice/mistakes
- Mark cuts with marker, not by scratching
- Support conduit every few feet while measuring
- Think through the entire run before starting
- Take photos of complex runs for future reference
- Keep bender clean and free of burrs

**Measuring Twice, Bending Once**

The old carpenter's saying applies double for conduit:
- Double-check all measurements
- Visualize the finished run
- Account for fittings and boxes
- Add length for trim and adjustments

Remember: Perfect bends come with practice. Even experienced electricians occasionally need to redo a bend. Learn from each mistake and keep improving your technique!`
      },
      { 
        title: 'Electrical Code', 
        content: 'Study NEC code requirements for residential and commercial jobs.',
        fullContent: `**National Electrical Code (NEC) Essentials**

The National Electrical Code is the foundation of electrical safety in the United States. Understanding and applying NEC requirements is critical for every electrician.

**About the NEC**

**What is the NEC?**
- Published by the National Fire Protection Association (NFPA)
- Updated every three years (2020, 2023, 2026, etc.)
- Not law itself, but adopted by jurisdictions as legal requirement
- Minimum safety standards for electrical installations

**NEC Organization:**
- **Chapter 1-4**: General requirements (apply to all installations)
- **Chapter 5-7**: Special occupancies, equipment, conditions
- **Chapter 8**: Communications systems (stands alone)
- **Chapter 9**: Tables and calculations
- **Annexes**: Informational (not enforceable)

**How to Read NEC References:**
- Example: 210.52(A)(1)
- 210 = Article (Branch Circuits)
- 52 = Section
- (A) = Subsection
- (1) = Exception or specific requirement

**Key NEC Articles for Residential Work**

**Article 110 - Requirements for Electrical Installations**

**Working Space [110.26]:**
- Minimum 3 feet clearance in front of panels/boxes
- Width: Minimum width of equipment or 30", whichever is greater
- Headroom: Minimum 6.5 feet
- Cannot block with storage, equipment, or furniture

**Article 210 - Branch Circuits**

**Receptacle Spacing [210.52(A)]:**
- No point along wall more than 6 feet from receptacle
- Wall space 2 feet or more needs receptacle
- Measured horizontally along wall line
- Includes above counter spaces

**Kitchen Receptacles [210.52(B)]:**
- 20-amp circuits required
- Two or more circuits for countertop outlets
- Receptacles every 4 feet along countertops
- Cannot be more than 2 feet from end of counter
- Island/peninsula: at least one receptacle
- Refrigerator on dedicated circuit (recommended, not required by NEC)

**Bathroom Receptacles [210.52(D)]:**
- At least one receptacle within 3 feet of basin
- On 20-amp circuit
- Can serve single bathroom or multiple bathrooms
- Cannot serve other areas

**Outdoor Receptacles [210.52(E)]:**
- Front and back of house
- Maximum 6.5 feet above grade
- GFCI protected
- Weather-resistant (WR) when in use or exposed to weather

**Garage Receptacles [210.52(G)]:**
- At least one receptacle
- GFCI protected
- In addition to appliance receptacles

**GFCI Protection [210.8]:**

**Required Locations for Dwelling Units:**
- Bathrooms (all receptacles)
- Garages and accessory buildings
- Outdoors
- Crawl spaces
- Unfinished basements
- Kitchens (countertop receptacles)
- Sinks (within 6 feet)
- Laundry areas
- Boat houses

**AFCI Protection [210.12]:**
- Required for all 120V, 15A and 20A branch circuits
- Supplying outlets in dwelling unit areas
- Kitchens, family rooms, dining rooms, living rooms
- Bedrooms, closets, hallways, laundry areas
- Can use AFCI breaker or AFCI outlet with proper labeling

**Article 220 - Branch Circuit, Feeder Calculations**

**General Lighting Load:**
- 3 VA per square foot for dwelling units
- Calculate based on outside dimensions
- Don't deduct for open porches, garages, unused spaces

**Small Appliance Circuits:**
- Minimum two 20A circuits for kitchen
- Must serve countertop receptacles
- Can also serve dining room receptacles
- Cannot serve any other loads

**Laundry Circuit:**
- At least one 20A circuit
- Only serves laundry area
- Cannot combine with other circuits

**Article 230 - Services**

**Service Disconnecting Means:**
- Maximum six switches or breakers
- Must be grouped
- Readily accessible
- Permanently marked to identify purpose

**Working Clearances:**
- Same as Article 110.26
- Keep area clear and accessible

**Article 250 - Grounding and Bonding**

Critical for safety—prevents shock and ensures proper operation:

**Grounding Electrode System:**
- Metal water pipe (first 5 feet in building)
- Metal building frame (if grounded)
- Concrete-encased electrode (rebar or wire)
- Ground rod (8 feet minimum depth)

**Grounding Requirements:**
- All metal boxes must be grounded
- Ground fault current path must be permanent and continuous
- Bonding required for service equipment
- Separate grounds not permitted for equipment on same circuit

**Equipment Grounding:**
- Green or bare wire
- Cannot use for current-carrying purposes
- Properly sized per NEC Table 250.122

**Article 300 - Wiring Methods**

**Protection from Physical Damage [300.4]:**
- Cables through framing: 1.25" from edge or use nail plate
- Cables parallel to framing: Run through bored holes or on approved hangers
- Protect cables from sharp edges

**Box Requirements [300.14]:**
- At least 6" of free conductor at outlets
- Measured from box opening
- Allows for device installation and future maintenance

**Securing and Supporting [300.11]:**
- NM cable: Every 4.5 feet and within 12" of boxes
- EMT/conduit: Every 10 feet and within 3 feet of boxes
- Proper staples/straps for cable type

**Article 314 - Outlet, Device, Pull, Junction Boxes**

**Box Fill Calculations [314.16]:**
Each counts as one:
- Each conductor originating outside box
- Each cable clamp (all count as one)
- Each device yoke
- Each grounding conductor (all count as one)

**Box Volume:**
- Must not exceed maximum fill
- Use Table 314.16(A) for wire size volumes
- Use Table 314.16(B) for box volumes
- When in doubt, use bigger box!

**Common Residential Code Violations**

**Improper GFCI/AFCI Protection:**
- Most frequent violation
- Missing GFCI in required locations
- Missing AFCI in bedroom circuits
- Solution: Know requirements, test installations

**Overloaded Boxes:**
- Too many wires in junction boxes
- Calculate box fill properly
- Use deep boxes or larger boxes when needed

**Improper Cable Support:**
- Romex cable not secured properly
- More than 12" from box without support
- Solution: Staple correctly, use proper fasteners

**Missing Receptacles:**
- Wall space without proper outlet coverage
- Not following 6-foot/12-foot rule
- Solution: Measure carefully, add receptacles as needed

**Wrong Wire Size for Circuit:**
- 14 AWG on 20A breaker
- 12 AWG on 15A breaker (okay, but wasteful)
- Solution: Match wire size to breaker rating

**Aluminum Wire Connections:**
- Using wrong devices/methods with aluminum
- Must use CO/ALR rated devices
- Solution: Special connectors, anti-oxidant compound

**Local Code Amendments**

Remember: Local jurisdictions can make NEC stricter:
- Some areas require GFCI on all garage receptacles
- Some require dedicated circuits for certain appliances
- Some have stricter than NEC rules
- **Always check local code before starting work**

**Using the NEC Effectively**

**Tips for Code Compliance:**
- Get familiar with your jurisdiction's adopted NEC version
- Use NEC index and table of contents
- Bookmark frequently used articles
- Attend code update classes when new NEC is adopted
- Use NEC Handbook (has commentary and examples)
- When unclear, ask inspector before proceeding

**Code Resources:**
- NEC Handbook (detailed explanations)
- Mike Holt videos and books
- Local electrical inspector office
- Continuing education classes
- Online NEC resources and forums

**Inspector Relations**

**Making Inspections Smooth:**
- Know the code before inspection
- Have worksite clean and organized
- Be present for inspection
- Have code book available if needed
- Accept corrections professionally
- Fix violations promptly

**Common Inspector Questions:**
- "Where's your GFCI protection?"
- "How did you calculate box fill?"
- "What's the wire size and breaker rating?"
- "Where are your AFCIs?"
- Be ready to explain your installation

**Continuing Education**

Code changes every three years, so:
- Take code update classes
- Subscribe to electrical trade magazines
- Join professional organizations (IAEI, local electrician groups)
- Review changes before adopted in your area
- Update your code book regularly

**Remember:** The NEC exists to prevent fires, shocks, and deaths. Following code isn't just about passing inspection—it's about keeping people safe and doing quality work you can be proud of.`
      },
      { 
        title: 'Panel Upgrades', 
        content: 'Learn to upgrade and label electrical panels safely.',
        fullContent: `**Electrical Panel Upgrades and Labeling**

Panel upgrades are among the most important and potentially dangerous jobs electricians perform. This lesson covers the complete process safely and professionally.

**When Panel Upgrades Are Needed**

**Insufficient Capacity:**
- Home has 60A or 100A service with frequent breaker trips
- Adding major appliances (EV charger, hot tub, central AC)
- Additions or renovations increasing electrical load
- Modern homes typically need 200A minimum

**Safety Issues:**
- Federal Pacific or Zinsco panels (fire hazards)
- Aluminum bus bars showing signs of overheating
- Rust or corrosion inside panel
- Breakers won't stay reset or trip randomly
- Burned smell or signs of arcing

**Code Violations:**
- No main disconnect
- Missing ground or improper grounding
- Mixed brands of breakers
- Double-tapped breakers (two wires under one breaker)
- Insufficient working space

**Pre-Upgrade Assessment**

**Inspect Existing Service:**
- Service entrance cable size and condition
- Meter base condition
- Service mast integrity
- Distance from utility connection
- Grounding electrode system

**Calculate Load Requirements:**
- General lighting: 3 VA per sq ft
- Small appliance circuits: 3000 VA minimum
- Laundry circuit: 1500 VA
- Range: nameplate rating
- Other fixed appliances: nameplate ratings
- Apply demand factors per NEC Article 220

**Plan New Panel:**
- Service size needed (100A, 150A, 200A)
- Number of circuits needed
- Space for future expansion
- GFCI and AFCI breaker locations
- Subpanel requirements

**Safety Precautions**

**CRITICAL SAFETY RULES:**

**Main Service Stays Energized:**
- Even with main breaker off, line side conductors are HOT
- Utility must disconnect for complete de-energization
- NEVER touch main lugs without proper training and PPE

**Required PPE:**
- Arc flash rated clothing (minimum NFPA 70E Level 2)
- Insulated gloves rated for voltage
- Face shield with hard hat
- Leather protector gloves over insulated gloves
- Safety glasses under face shield

**Working on Energized Equipment:**
- Only when absolutely necessary
- Must have proper training and certification
- Use insulated tools
- Keep one hand behind back when possible
- Have spotter present

**Panel Upgrade Process**

**Step 1: Schedule Utility Disconnect**
- Call utility company several days in advance
- They'll disconnect at transformer or meter
- Confirms you cannot proceed alone safely
- Utility reconnects after inspection

**Step 2: Remove Old Panel (After Disconnect)**
- Take photos of existing wiring
- Label every wire before disconnecting
- Note which circuits are doubled up
- Carefully remove all conductors from main lugs
- Remove panel from wall

**Step 3: Prepare New Panel Location**
- Install new panel backing board if needed
- Verify working clearances per NEC 110.26
- Ensure proper height (center of grip 6'7" or less)
- Plan conduit runs if needed

**Step 4: Install New Panel**
- Level and secure to wall
- Use appropriate anchors for wall type
- Bond panel to grounding electrode system
- Install main breaker

**Step 5: Service Entrance Connection**
- Clean wire ends thoroughly
- Apply anti-oxidant if aluminum
- Torque to manufacturer specifications
- Use torque wrench, not guess
- Double-check all connections

**Step 6: Transfer Circuits**
- Work one circuit at a time
- Maintain labels from old panel
- Use proper wire stripping length
- Torque all connections per spec
- Organize wires neatly

**Step 7: Test Before Utility Reconnection**
- Verify all breakers are off
- Check main breaker is off
- Inspect all connections visually
- Look for any loose strands of wire
- Verify proper breaker types for circuits

**Step 8: Final Connections and Testing**
- Utility reconnects service
- Turn on main breaker
- Test voltage at main lugs (should be ~240V)
- Energize branch circuits one at a time
- Test each circuit for proper operation
- Check for any warm connections

**Proper Panel Organization**

**Physical Layout:**
- Group related circuits together
- Leave spaces for future circuits
- Balance loads on both bus legs
- Put frequently tripped circuits on top
- Heavy loads distributed throughout panel

**Wire Management:**
- Tie cables together neatly
- Use cable ties or lacing
- Bend conductors in smooth curves
- Keep wires away from sharp edges
- Leave service loop at each breaker

**Grounding and Bonding:**
- Main panel: grounds and neutrals bonded together
- Subpanel: grounds and neutrals must be separated
- Green screw (main bonding jumper) only in main panel
- Ground and neutral bus bars properly sized

**Panel Labeling Requirements**

**NEC Requirements [408.4]:**
- Every circuit clearly identified
- Labels permanently marked
- Identify purpose and location served
- Update labels when changes made

**Professional Labeling Practices:**

**Bad Labels:**
- "Outlet"
- "Upstairs"
- "Kitchen"
- "Misc"

**Good Labels:**
- "Kitchen North Wall Outlets"
- "Master Bedroom Lights & Ceiling Fan"
- "Garage Outlets West Wall & Exterior"
- "Guest Bath GFCI Outlets & Exhaust Fan"

**Labeling Tips:**
- Be specific about location
- Include both sides of three-way switches
- Note if circuit is shared between rooms
- Indicate GFCI and AFCI protection
- Use label maker for professional appearance

**Creating an Accurate Panel Schedule**

**Information to Include:**
- Circuit number
- Breaker size
- Circuit description
- Wire size
- GFCI/AFCI designation
- Load calculation (optional but helpful)

**Sample Panel Schedule:**

Circuit | Breaker | Wire | Type | Description
1       | 20A     | 12   | AFCI | Master BR Outlets
2       | 15A     | 14   | AFCI | Master BR Lights/Fan
3       | 20A     | 12   | GFCI | Kitchen Countertop East
4       | 20A     | 12   | GFCI | Kitchen Countertop West
5       | 20A     | 12   | GFCI | Bathrooms All
...

**Panel Schedule Location:**
- Inside panel door (most professional)
- Posted nearby
- Copy given to homeowner
- Photo saved in your records

**Special Considerations**

**Subpanel Installation:**
- Grounds and neutrals separated (different bus bars)
- Four-wire feed from main panel (2 hots, neutral, ground)
- No bonding screw between ground and neutral
- Proper feeder size for distance and load

**Generator Transfer Switch:**
- Proper interlocking mechanism
- Clearly labeled circuits on generator
- Generator properly sized for load
- Bonding requirements different than main service

**Solar System Integration:**
- May require service upgrade to 200A
- Backfeed breaker properly sized and labeled
- Special labeling requirements
- Coordinate with solar installer and inspector

**Common Panel Upgrade Problems**

**Service Entrance Cable Too Short:**
- May need new service mast
- Extend with proper splice methods
- May require utility coordinator

**Grounding Issues:**
- Missing grounding electrode
- Improper bonding
- Aluminum wire connections corroded
- Solution: Upgrade complete grounding system

**Insufficient Working Space:**
- Panel in closet or blocked
- Must meet NEC 110.26
- May need to relocate panel

**Mixed Breaker Brands:**
- All breakers must be listed for that panel
- Can't mix Square D, GE, Siemens, etc.
- Some panels accept classified breakers
- When in doubt, check manufacturer specs

**Inspection Tips**

**Before Inspector Arrives:**
- Clean panel and surroundings
- All breakers labeled
- Panel cover installed
- Working clearances maintained
- Dead front cover secure with all screws

**Common Inspector Concerns:**
- Improper breaker for wire size
- Missing GFCI/AFCI where required
- Panel labels missing or inadequate
- Working space violations
- Improper torque on connections

**After Panel Upgrade**

**Client Education:**
- Explain where main breaker is located
- Show how to reset tripped breaker
- Provide panel schedule and keep copy
- Explain purpose of GFCI/AFCI breakers
- Emergency contact information

**Documentation:**
- Photos of completed work
- Copy of panel schedule
- Inspection certificate
- Warranty information
- Your contact info for future work

**Follow-Up:**
- Check on client after a week
- Any issues or questions?
- Builds trust for future work
- Generates referrals

**Panel upgrade work is complex and potentially dangerous. If you're not comfortable with any part of the process, get additional training or assistance from an experienced electrician. There's no shame in admitting when a job is beyond your current skill level—in fact, that's the mark of a professional.**`
      },
      { 
        title: 'Troubleshooting', 
        content: 'Diagnose and repair common electrical faults.',
        fullContent: `**Electrical Troubleshooting Mastery**

Troubleshooting is where electricians separate themselves from parts-changers. This systematic approach will help you solve problems efficiently and safely.

**The Troubleshooting Mindset**

**Think Like a Detective:**
- Gather all available information
- Don't jump to conclusions
- Test your hypotheses
- Eliminate possibilities systematically
- Learn from every problem

**Fundamental Principles:**
- Electricity follows the path of least resistance
- Current must have a complete circuit to flow
- Voltage drop indicates resistance
- Power = Voltage × Current
- Ohm's Law: V = I × R

**Essential Troubleshooting Tools**

**Must-Have:**
- Multimeter (True RMS recommended)
- Non-contact voltage tester
- Circuit tracer/tone generator
- Outlet tester (three-light)
- Flashlight (hands-free headlamp ideal)
- Screwdrivers (insulated handles)

**Nice-to-Have:**
- Thermal imaging camera (finds hot spots)
- Clamp meter (measures current without breaking circuit)
- Ground resistance tester
- Megohmmeter (insulation tester)

**Systematic Troubleshooting Process**

**Step 1: Gather Information**

Ask the client:
- When did problem start?
- Exactly what's not working?
- What was happening when problem occurred?
- Any recent changes? (renovations, new appliances, weather events)
- Intermittent or constant?
- Any unusual smells or sounds?

**Step 2: Visual Inspection**

Look for obvious issues:
- Tripped breakers
- Burned or discolored outlets/switches
- Loose wire connections
- Signs of water damage
- Rodent damage to wiring
- DIY repairs that might be improper

**Step 3: Verify the Problem**

- Test the circuit yourself
- Don't rely only on client description
- Try multiple devices if possible
- Use known-good test equipment

**Step 4: Develop a Theory**

Based on symptoms, most likely cause:
- Circuit overload
- Short circuit
- Open circuit (break in wire)
- Loose connection
- Ground fault
- Defective device

**Step 5: Test Your Theory**

Use appropriate tools:
- Voltage test for power presence
- Continuity test for complete circuits
- Resistance test for wire integrity
- Load test to identify overloads

**Step 6: Repair**

Once you've confirmed the problem:
- Turn off power
- Make repair safely
- Test repair thoroughly
- Verify entire circuit works

**Step 7: Document and Explain**

- Tell client what was wrong
- Explain what you did
- Provide prevention tips
- Document for your records

**Common Problems and Solutions**

**Problem: Circuit Dead (No Power)**

**Possible Causes:**
1. Tripped breaker
2. Loose connection at panel
3. Wire broken in wall
4. Bad device disrupting circuit

**Troubleshooting Steps:**
1. Check breaker - tripped position?
2. Reset breaker - holds or trips immediately?
3. If trips immediately: short circuit or ground fault
4. If holds but no power: open circuit somewhere
5. Test voltage at breaker output
6. Test voltage at first outlet/junction
7. Work through circuit until you find where power stops

**Solution:**
- Repair short circuit or ground fault
- Replace broken wire
- Fix loose connection
- Replace faulty device

**Problem: GFCI Trips Repeatedly**

**Possible Causes:**
1. Actual ground fault (current leakage)
2. Moisture in outlet or appliance
3. Worn insulation on wiring
4. Bad GFCI device
5. Neutral and ground crossed downstream

**Troubleshooting Steps:**
1. Unplug all devices from GFCI circuit
2. Test GFCI reset - holds?
3. If holds, plug in devices one at a time
4. Identify culprit device
5. If trips with nothing plugged in: wiring fault
6. Check for moisture in boxes
7. Test insulation resistance with megohmmeter

**Solution:**
- Replace faulty appliance
- Dry out wet outlet boxes
- Repair damaged wiring
- Fix neutral/ground connections
- Replace bad GFCI

**Problem: Lights Flickering**

**Possible Causes:**
1. Loose connection (most common)
2. Overloaded neutral
3. Poor contact in switch
4. Utility voltage fluctuation
5. Defective bulbs/fixtures

**Troubleshooting Steps:**
1. Check if all lights or just some?
2. All lights: likely panel or utility issue
3. Some lights: local connection problem
4. Check tightness at panel
5. Check switch connections
6. Check fixture connections
7. Test voltage at panel - should be stable 120V

**Solution:**
- Tighten all connections
- Balance loads on neutral
- Replace faulty switches
- Contact utility if voltage problem
- Replace fixtures if defective

**Problem: Outlet Not Working**

**Possible Causes:**
1. Tripped GFCI upstream
2. Loose wire at outlet
3. Outlet fed from switch that's off
4. Broken wire to outlet
5. Bad outlet

**Troubleshooting Steps:**
1. Check for GFCI button on this or nearby outlets
2. Reset any tripped GFCIs
3. Remove outlet cover and test for voltage
4. Check wire connections at outlet
5. Check if half-switched outlet
6. Test outlet with multimeter
7. Bypass outlet, test wire directly

**Solution:**
- Reset GFCI
- Repair wire connections
- Replace bad outlet
- Identify and fix break in wire

**Problem: Breaker Trips When Load Turns On**

**Possible Causes:**
1. Overloaded circuit
2. Short circuit in appliance
3. Motor starting surge (normal for some appliances)
4. Loose wire causing arc
5. Wrong size breaker for wire

**Troubleshooting Steps:**
1. Unplug all devices from circuit
2. Reset breaker - holds?
3. Plug in devices one at a time
4. Identify what causes trip
5. Check amperage draw with clamp meter
6. Inspect appliance for short circuit
7. Check wire size vs breaker size

**Solution:**
- Redistribute loads to different circuits
- Repair or replace faulty appliance
- Upsize circuit if code compliant
- Fix loose connections
- Correct any improper breaker sizing

**Problem: Burning Smell at Outlet**

**IMMEDIATE ACTION REQUIRED:**
This is a fire hazard!

**Possible Causes:**
1. Loose connection causing arcing
2. Overloaded circuit
3. Backstabbed wires pulling loose
4. Oxidized aluminum wire connection

**Troubleshooting Steps:**
1. Turn off breaker immediately
2. Check for visible damage
3. Remove outlet and inspect
4. Look for burned marks on wires or terminal screws
5. Check other outlets on circuit

**Solution:**
- Replace outlet
- Use screw terminals, not backstabs
- Tighten all connections
- Use CO/ALR devices for aluminum wire
- May need to rewire if damage extensive

**Advanced Troubleshooting Techniques**

**Voltage Drop Testing:**
- Measures voltage loss in conductors
- Indicates poor connections or undersized wire
- Acceptable: <3% for branch circuits, <5% total

**Procedure:**
1. Measure voltage at panel
2. Measure voltage at far end of circuit under load
3. Calculate drop: (V1 - V2) / V1 × 100
4. Example: 120V to 115V = 4.2% drop (investigate)

**Insulation Resistance Testing:**
- Uses megohmmeter
- Tests wire insulation quality
- Important for old wiring or moisture exposure

**Procedure:**
1. Disconnect circuit from power
2. Set megohmmeter to 500V
3. Test between conductors
4. Test each conductor to ground
5. Good insulation: >100 megohms
6. Investigate if: <10 megohms

**Circuit Tracing:**
- Identifies which outlets/fixtures on circuit
- Essential when labels missing or incorrect

**Procedure:**
1. Plug tone generator into outlet
2. Use tone tracer to find matching outlets
3. Map entire circuit
4. Update panel labels

**Troubleshooting Intermittent Problems**

Most frustrating because they're not active when you're there:

**Strategies:**
1. Try to reproduce the problem
2. Ask very specific questions about when it occurs
3. Temperature-related? (expands/contracts)
4. Time-related? (utility load, other equipment)
5. Vibration-related? (door closing, walking on floor)
6. Monitor with recording equipment if needed

**Common Intermittent Causes:**
- Loose wire that makes contact sometimes
- Thermostat cycling equipment
- Motion sensor or timer
- Failing device not completely dead yet
- Utility voltage fluctuations

**Safety During Troubleshooting**

**Never Assume Power Is Off:**
- Test every time before touching wires
- Even if breaker is off
- Even if others say it's off
- Your life depends on verification

**Work Methodically:**
- Don't rush through troubleshooting
- Fatigue causes mistakes
- Take breaks on complex problems
- Get second opinion if stuck

**When to Stop:**
- Problem beyond your knowledge level
- Safety equipment inadequate
- Unsafe work conditions
- Customer pressure to take shortcuts

**Building Your Troubleshooting Skills**

**Practice Opportunities:**
- Volunteer for difficult calls
- Study problems even after solution found
- Ask experienced electricians how they'd approach it
- Review failures to understand mistakes

**Keep Learning:**
- Take continuing education on troubleshooting
- Read trade magazines for new techniques
- Learn about new technologies (smart home, etc.)
- Understand how modern appliances work

**Document Your Experience:**
- Keep notes on unusual problems
- Photograph interesting situations
- Build a personal reference library
- Share knowledge with others

**Professional Troubleshooting Tips**

**Managing Customer Expectations:**
- Explain that troubleshooting takes time
- Describe systematic approach
- Update customer as you work
- Don't guess—test to confirm

**Billing for Troubleshooting:**
- Charge appropriately for diagnostic time
- Explain value of experience and knowledge
- Don't race to finish—quality matters
- Quote repair separately from diagnosis

**Building Reputation:**
- Solve problems others couldn't
- Explain problems in terms customers understand
- Provide prevention tips
- Follow up to ensure satisfaction

**Remember: Great troubleshooters are made, not born. Every problem you solve adds to your knowledge and experience. Embrace difficult challenges as learning opportunities. The electrician who can reliably diagnose and fix complex problems will always have work and command premium rates.**`
      }
    ]
  },
  {
    title: 'HVAC Technician Training',
    description: 'Learn installation, maintenance, and troubleshooting of heating, ventilation, and air conditioning systems with immersive simulations.',
    lessons: [
      { 
        title: 'HVAC Safety', 
        content: 'Understand refrigerant safety, electrical hazards, and safe tool use.',
        fullContent: `**HVAC Safety Fundamentals**

Safety is paramount in HVAC work. You'll encounter electrical hazards, chemical refrigerants, heavy equipment, and extreme temperatures. This lesson covers the essential safety protocols every HVAC technician must know.

**Personal Protective Equipment (PPE)**

**Essential PPE for HVAC Work:**

- **Safety Glasses**: Protect from refrigerant spray, metal shavings, debris
- **Work Gloves**: Insulated for electrical work, cut-resistant for sheet metal
- **Steel-Toed Boots**: Protect from falling equipment and electrical hazards
- **Hard Hat**: Required on construction sites and when working overhead
- **Hearing Protection**: For noisy compressor rooms and power tools
- **Respirator**: When working with refrigerants in confined spaces or around mold

**Refrigerant Safety**

Refrigerants are essential to HVAC systems but can be dangerous:

**Health Hazards:**
- **Inhalation**: Can cause dizziness, asphyxiation, cardiac arrhythmia
- **Skin Contact**: Can cause frostbite from rapid expansion
- **Eye Contact**: Can cause severe damage and freezing
- **Oxygen Displacement**: Heavier than air, can displace oxygen in confined spaces

**Safe Handling Practices:**
1. **Always wear safety glasses and gloves** when handling refrigerant
2. **Work in well-ventilated areas** - refrigerants displace oxygen
3. **Never use refrigerant to clean parts** or blow out lines
4. **Store cylinders upright** and secure them properly
5. **Check for leaks before opening system**
6. **Use proper recovery equipment** - venting is illegal and dangerous
7. **Know the refrigerant type** - different refrigerants require different handling

**EPA 608 Certification:**
- **Legally required** to handle refrigerants
- **Four types**: Type I (small appliances), Type II (high-pressure), Type III (low-pressure), Universal (all)
- Covers proper recovery, recycling, and disposal
- Must pass exam to work with refrigerants

**Electrical Safety in HVAC**

HVAC technicians work with both low-voltage control circuits and high-voltage power:

**Voltage Levels:**
- **Low Voltage (24V)**: Thermostats and control circuits - generally safe but verify
- **Line Voltage (120V)**: Blowers, small motors - can cause serious shock
- **High Voltage (240V/480V)**: Compressors, large motors - can be fatal

**Electrical Safety Rules:**
1. **Always turn off power at the disconnect** before servicing
2. **Lock out/tag out on commercial systems**
3. **Test with voltmeter** - don't assume power is off
4. **Discharge capacitors** before touching - they store lethal voltage
5. **One hand rule**: Keep one hand in pocket when testing live circuits
6. **Use insulated tools** rated for electrical work
7. **Stand on rubber mat** when working on energized equipment

**Capacitor Discharge Procedure:**
1. Turn off all power
2. Wait 5 minutes for self-discharge
3. Use insulated screwdriver across terminals to short
4. Verify discharge with multimeter
5. Now safe to handle

**Physical Hazards**

**Lifting and Moving Equipment:**
- Use proper lifting technique: bend knees, not back
- Get help for items over 50 lbs
- Use appliance dolly or hand truck
- Secure equipment during transport
- Clear path before moving equipment

**Working at Heights:**
- Use proper ladder for the job
- Maintain 3-point contact when climbing
- Secure ladder at top and bottom
- Don't overreach - move the ladder
- Use fall protection on roofs over 6 feet

**Confined Spaces:**
- Attics, crawl spaces, mechanical rooms with limited access
- Test atmosphere before entering
- Have spotter outside
- Use proper ventilation
- Wear respirator if needed
- Know emergency exit routes

**Tool Safety**

**Power Tools:**
- Inspect before each use
- Keep guards in place
- Wear eye protection
- Secure workpiece
- Unplug when changing bits/blades
- Keep cords away from cutting area

**Hand Tools:**
- Use right tool for the job
- Keep tools clean and sharp
- Carry tools safely - don't put in pockets
- Store properly when not in use

**Specialized HVAC Tools:**
- **Refrigerant gauges**: Handle carefully, check hoses for leaks
- **Vacuum pump**: Keep oil clean, don't run without vacuum
- **Recovery machine**: Follow manufacturer procedures
- **Torch**: Keep fire extinguisher nearby, check for gas leaks
- **Multimeter**: Set to correct range, check test leads

**Chemical Hazards**

**Common HVAC Chemicals:**

**Coil Cleaners:**
- Often acidic or alkaline
- Wear gloves and eye protection
- Use in ventilated area
- Rinse thoroughly after application
- Keep away from skin

**Brazing Flux:**
- Can cause skin and eye irritation
- Use in ventilated area
- Don't breathe fumes

**Thread Sealants and Adhesives:**
- Some contain harmful solvents
- Use in ventilated area
- Follow manufacturer safety instructions
- Store properly when not in use

**Always read and follow Safety Data Sheets (SDS) for all chemicals you use.**

**Fire Safety**

**Brazing and Torch Work:**
- Most common cause of HVAC-related fires
- Keep fire extinguisher within reach
- Use heat shields to protect surroundings
- Check for smoldering after finishing
- Never leave torch unattended

**Fire Extinguisher Types:**
- **Class A**: Wood, paper, cloth
- **Class B**: Flammable liquids
- **Class C**: Electrical fires
- **ABC**: All-purpose - what you should carry

**Emergency Procedures**

**Refrigerant Exposure:**
1. Move to fresh air immediately
2. If skin contact, flush with water for 15 minutes
3. If eye contact, flush with water for 15 minutes and seek medical attention
4. If inhaled large amount, call 911
5. Never put yourself at risk to help - get help first

**Electrical Shock:**
1. **Don't touch the victim if still in contact with electricity**
2. Turn off power at source if possible
3. Call 911 immediately
4. Begin CPR if trained and victim not breathing
5. Use AED if available

**Heat-Related Illness:**
- HVAC work often in hot attics and rooftops
- Watch for signs: dizziness, nausea, confusion, excessive sweating or lack of sweating
- Drink plenty of water throughout the day
- Take breaks in cool areas
- Know symptoms of heat exhaustion vs heat stroke

**Job Site Safety**

**Communication:**
- Let someone know where you're working
- Communicate with other trades on site
- Ask questions if you're unsure
- Report unsafe conditions

**Site Awareness:**
- Watch for hazards: wet floors, uneven surfaces, overhead hazards
- Keep work area clean and organized
- Use caution signs when needed
- Be aware of other workers and equipment

**Vehicle Safety:**
- Secure all tools and equipment
- Don't overload vehicle
- Check tie-downs regularly
- Drive safely - you represent your company
- Don't work tired - fatigue causes accidents

**Safety Culture**

**Your Responsibility:**
- Safety is everyone's job
- Speak up if you see unsafe conditions
- Don't take shortcuts to save time
- Continue learning about safety
- Set good example for apprentices

**Company Responsibility:**
- Provide proper PPE
- Offer safety training
- Maintain safe equipment
- Support safety-first culture
- Never pressure technicians to skip safety steps

**Remember: No job is so important that it's worth getting hurt. If you don't feel safe, stop and reassess. Your experience and judgment will grow over time, but always prioritize safety first.**`
      },
      { 
        title: 'System Components', 
        content: 'Identify and explain compressors, condensers, evaporators, and thermostats.',
        fullContent: `**HVAC System Components**

Understanding how each component works and interacts is essential for effective troubleshooting and repair. This lesson covers the major components of HVAC systems.

**The Refrigeration Cycle**

Before diving into components, understand the basic refrigeration cycle:

1. **Evaporator**: Refrigerant absorbs heat, evaporates into gas (inside the home)
2. **Compressor**: Compresses gas, raising temperature and pressure
3. **Condenser**: Hot gas releases heat, condenses into liquid (outside the home)
4. **Expansion Device**: Reduces pressure, cooling liquid refrigerant
5. **Back to Evaporator**: Cycle repeats

**The Compressor**

The heart of the refrigeration system - compresses refrigerant gas to high pressure and temperature.

**Types of Compressors:**

**Reciprocating:**
- Piston-driven like an engine
- Most common in residential systems
- Reliable and serviceable
- Can be noisy
- Good for varying loads

**Scroll:**
- Two spiral-shaped scrolls
- One stationary, one orbits
- Very efficient and quiet
- Fewer moving parts
- Most popular for modern residential systems
- Not serviceable - replace entire unit

**Rotary:**
- Rotating blade compresses refrigerant
- Used in smaller units (window AC, refrigerators)
- Compact and efficient
- Generally reliable

**Screw:**
- Two helical rotors
- Used in large commercial systems
- Very efficient at high capacities
- Can handle dirty refrigerant better

**Compressor Components:**
- **Motor**: Hermetically sealed with compressor
- **Suction Line**: Low-pressure gas enters here
- **Discharge Line**: High-pressure hot gas exits here
- **Compressor Terminals**: C (common), S (start), R (run)
- **Capacitors**: Start and/or run capacitors provide electrical assistance

**Common Compressor Problems:**
- Won't start - failed capacitor, bad relay, or seized compressor
- Hard start - weak capacitor or low voltage
- Short cycling - overheating, bad thermostat, or refrigerant issues
- Noisy operation - worn bearings, loose mounting
- Not pumping - internal wear or valve failure

**The Condenser (Outdoor Unit)**

**Purpose**: Release heat absorbed indoors to the outside air

**Components:**

**Condenser Coil:**
- Copper tubing with aluminum fins
- Refrigerant flows through tubing
- Fins increase surface area for heat transfer
- Must be clean for proper operation

**Condenser Fan:**
- Pulls or pushes air through coil
- Usually propeller-style fan
- Motor typically mounted on top
- Some systems use multiple fans

**Condenser Fan Motor:**
- Typically PSC (permanent split capacitor) type
- Requires run capacitor
- Should have thermal overload protection
- Multiple speeds in some systems

**Cabinet:**
- Protects components
- Directs airflow
- Should have access panels
- Grounded for safety

**Maintenance:**
- Clean coils annually (outside-in with water)
- Ensure clear airflow (24" clearance recommended)
- Check fan blade for damage
- Tighten electrical connections
- Verify proper refrigerant charge

**The Evaporator (Indoor Coil)**

**Purpose**: Absorb heat from indoor air as refrigerant evaporates

**Types:**

**A-Coil:**
- Shaped like letter A
- Most common in upflow systems
- Good airflow, easy to service

**Slab Coil:**
- Flat design
- Used in horizontal installations
- Compact footprint

**N-Coil:**
- Three-sided design
- Maximizes coil surface area
- Used when space is limited

**Evaporator Components:**

**Coil Tubing:**
- Copper tubing (some aluminum in modern systems)
- Aluminum fins attached
- Must maintain good thermal contact

**Condensate Drain Pan:**
- Collects water condensing from air
- Primary and secondary pans in many systems
- Must slope toward drain
- Can harbor mold/bacteria if not maintained

**Expansion Device:**
- **TXV (Thermostatic Expansion Valve)**: Adjusts refrigerant flow based on superheat, more efficient, more complex
- **Piston/Orifice**: Fixed restriction, simple, less efficient, common in residential
- **EEV (Electronic Expansion Valve)**: Computer-controlled, most efficient, used in high-end systems

**Common Issues:**
- **Frozen coil**: Low airflow, low refrigerant, or dirty filter
- **Dirty coil**: Reduces efficiency, restricts airflow
- **Clogged drain**: Water damage, overflow
- **Leaking refrigerant**: Usually at coil connections

**The Blower/Air Handler**

**Purpose**: Circulate conditioned air throughout the home

**Components:**

**Blower Motor:**
- **PSC (Permanent Split Capacitor)**: Traditional, multiple speeds via taps, less efficient
- **ECM (Electronically Commutated Motor)**: Variable speed, very efficient, quieter, more expensive
- Mounted on shaft with blower wheel

**Blower Wheel:**
- **Forward-curved** (squirrel cage): Most common, good for ductwork
- **Backward-curved**: More efficient, used in some systems
- Must be balanced and clean

**Blower Housing:**
- Directs airflow
- Cutoff plate for efficiency
- Inlet and outlet connections

**Control Board:**
- Modern systems have sophisticated controls
- Manages blower speeds
- Safety features
- Communicates with thermostat

**Air Filter:**
- **Location**: Return air side (before blower)
- **Types**: Fiberglass (cheap, low filtration), pleated (better filtration), HEPA (highest filtration, requires proper system design)
- **MERV Rating**: Higher = better filtration but more resistance
- **Change regularly**: Every 1-3 months depending on type and conditions

**Thermostat**

The brain of the system - tells it when to heat, cool, and circulate air.

**Types:**

**Mechanical:**
- Bimetal strip or mercury switch
- Simple, reliable
- Limited features
- Essentially obsolete

**Digital Programmable:**
- Set different temps for different times
- Energy savings
- Common in older homes still

**Smart/WiFi:**
- Remote control via smartphone
- Learning algorithms (Nest, Ecobee)
- Energy reports
- Integration with smart home
- Most popular for new installations

**Typical Wiring (24V):**
- **R (Red)**: 24V power from transformer
- **C (Blue)**: Common - needed for smart thermostats
- **W (White)**: Heat
- **Y (Yellow)**: Cooling
- **G (Green)**: Fan
- **O/B (Orange/Blue)**: Reversing valve (heat pumps)

**Common Thermostat Issues:**
- Dead display - no C wire power or failed transformer
- Wrong temperature - poor location or calibration
- System doesn't respond - wiring issue or failed thermostat
- Short cycling - anticipator setting (mechanical) or location problem

**Ductwork System**

Delivers conditioned air throughout the building.

**Components:**

**Supply Ducts:**
- Carry conditioned air from unit to rooms
- Should be insulated in unconditioned spaces
- Sized for proper airflow (CFM requirements)

**Return Ducts:**
- Bring air back to unit for conditioning
- Often undersized in older homes
- Should be sealed at joints

**Registers and Grilles:**
- Supply registers: Adjustable to direct air
- Return grilles: Allow air back to system
- Size matters for proper airflow

**Dampers:**
- **Manual**: Balance airflow to different zones
- **Motorized**: Automatic zone control
- **Backdraft**: Prevent reverse airflow

**Common Duct Problems:**
- **Leaks**: Waste energy, reduce efficiency
- **Poor insulation**: Heat gain/loss in attic/crawl
- **Improper sizing**: Noisy, inefficient operation
- **Crushed/restricted**: Reduced airflow

**Controls and Safety Devices**

**Transformer:**
- Steps down 120V/240V to 24V for controls
- Usually 40VA rating
- Located in air handler or furnace
- Can fail and needs replacement

**Contactors and Relays:**
- **Contactor**: Heavy-duty relay for compressor and fan
- **Relay**: Control low-power circuits
- Contacts can burn out from arcing
- Coil can fail (24V control circuit)

**Safety Switches:**

**Pressure Switches:**
- Monitor refrigerant pressures
- High-pressure switch: Prevents overcharge damage
- Low-pressure switch: Prevents running with low charge

**Float Switch:**
- Detects condensate backup
- Shuts system down to prevent water damage
- Important safety feature

**Limit Switches:**
- In furnaces, prevent overheating
- Open at set temperature
- Can indicate airflow or cycling problems

**Understanding System Types**

**Split System (Most Common):**
- Outdoor unit (condenser/compressor)
- Indoor unit (evaporator/blower)
- Connected by refrigerant lines
- Most serviceable

**Package Unit:**
- All components in one cabinet
- Usually on roof or beside building
- Common in commercial, some residential
- Limited service access

**Mini-Split (Ductless):**
- Outdoor condenser
- One or more indoor wall units
- No ductwork needed
- Excellent efficiency
- Quiet operation
- Good for additions/specific zones

**Heat Pump:**
- Same as AC but reverses to provide heat
- Uses reversing valve
- Has both heating and cooling modes
- Requires supplemental heat in very cold climates

**Component Interaction**

All components work together:

1. **Thermostat calls for cooling**
2. **Control board energizes blower** (or delays slightly)
3. **Contactor closes**, sending power to compressor and condenser fan
4. **Compressor pumps refrigerant** through system
5. **Evaporator absorbs heat**, cooling air
6. **Blower circulates cooled air** through ductwork
7. **Condenser releases heat** outside
8. **When temperature satisfied**, thermostat breaks circuit
9. **Compressor and condenser fan stop**
10. **Blower may run a bit longer** to clear cold air from coil

**Understanding this cycle and each component's role is essential for effective HVAC diagnosis and repair.**`
      },
      { 
        title: 'Diagnostics', 
        content: 'Practice troubleshooting common HVAC issues with interactive scenarios.',
        fullContent: `**HVAC Diagnostics and Troubleshooting**

Effective troubleshooting separates great HVAC technicians from average ones. This lesson teaches systematic diagnostic approaches.

**The Diagnostic Mindset**

**Gather Information:**
- What exactly is the problem?
- When did it start?
- Any recent changes or work done?
- Intermittent or constant?
- Any unusual sounds, smells, or sights?

**Use Your Senses:**
- **Sight**: Look for obvious damage, leaks, corrosion
- **Sound**: Listen for unusual noises (grinding, squealing, hissing)
- **Touch**: Feel for hot spots, vibration (with power off!)
- **Smell**: Detect burning, mold, refrigerant
- **Don't**: Taste anything!

**Systematic Approach:**
1. Verify the complaint
2. Check simple things first
3. Gather data (temperatures, pressures, voltages)
4. Analyze the data
5. Form a hypothesis
6. Test the hypothesis
7. Make the repair
8. Verify the fix

**Essential Diagnostic Tools**

**Must-Have:**
- Multimeter (voltage, current, resistance)
- Manifold gauge set (pressures and charging)
- Thermometer/temp clamp (temperature readings)
- Amperage clamp meter (motor current draw)
- Capacitor tester
- Leak detector (electronic or dye)

**Nice-to-Have:**
- Manometer (airflow and pressure)
- Combustion analyzer (furnaces)
- Refrigerant scale (precise charging)
- Psychrometer (humidity readings)
- Inspection camera (visual diagnostics)
- Thermal imager (finding hot spots and leaks)

**Common Problem: System Won't Turn On**

**Check in This Order:**

**1. Thermostat:**
- Display lit? (If not, check C wire or batteries)
- Set to Cool/Heat mode?
- Set temperature appropriate?
- Try lowering/raising setpoint 5°F

**2. Power:**
- Circuit breaker on?
- Disconnect switch on (both indoor and outdoor)?
- Fuses good (if applicable)?

**3. Safety Switches:**
- Condensate switch tripped?
- Door switch closed on air handler?
- Filter access door closed?

**4. Control Voltage:**
- Measure at transformer: Should be 24-28VAC
- If no voltage: Transformer failed or no power to it
- If voltage at transformer but not thermostat: Broken wire

**5. Contactor:**
- Is it pulling in when thermostat calls?
- If not: Check 24V to contactor coil
- If voltage present but not pulling in: Bad contactor coil
- If pulling in but no compressor: Check power through contacts

**Problem: System Runs But No Cooling**

**Temperature Check:**
- Measure supply air temp
- Measure return air temp
- **Delta T (Temperature Split)**: Should be 15-20°F difference
- If less than 15°F: Problem with refrigeration cycle or airflow

**Check Airflow:**
- **Dirty filter**: Most common cause of poor cooling
- Dirty evaporator coil
- Blocked return or supply
- Blower motor issue
- Wrong blower speed

**Check Refrigeration:**
- Connect manifold gauges
- Compare pressures to manufacturer chart (varies by outdoor temp)
- **Low side too low + High side too low = Low refrigerant**
- **Both sides too high = Overcharge or restriction**
- **Low side too high = Restriction or bad compressor**

**Check Compressor:**
- Is it running? (Feel vibration, listen)
- Check amp draw vs nameplate
- If not drawing amps: Open circuit or bad compressor
- If drawing high amps: Mechanical problem
- If drawing low amps: Weak compressor

**Problem: Frozen Evaporator Coil**

**Three Main Causes:**

**1. Low Airflow:**
- Dirty filter (check first!)
- Dirty evaporator coil
- Closed/blocked registers
- Ductwork issues
- Wrong blower speed
- Failed blower motor

**2. Low Refrigerant:**
- Causes low pressure and temp
- Coil can't absorb enough heat
- Ice builds up
- Find and fix leak, recharge

**3. Running in Cool Weather:**
- Outdoor temp below 65°F
- System not designed for low ambient
- Pressures too low
- Solution: Don't run AC when cool outside

**Diagnostic Procedure:**
1. Turn off system and let ice melt (can take hours)
2. Check filter - replace if dirty
3. Inspect coil for dirt
4. Once thawed, turn on and monitor
5. Check refrigerant charge
6. Verify airflow (should feel strong)

**Problem: Short Cycling**

**System turns on and off too frequently:**

**Possible Causes:**

**Oversized Equipment:**
- Cools too quickly
- Doesn't run long enough to dehumidify
- Common in replaced systems
- Solution: Often none except replacement

**Thermostat Issues:**
- Bad location (near supply vent, direct sun)
- Differential set too small
- Failed thermostat
- Solution: Relocate or replace

**Dirty Condenser:**
- Can't reject heat properly
- High pressure cutout trips
- Solution: Clean coil thoroughly

**Refrigerant Overcharge:**
- High head pressure
- Trips high-pressure switch
- Solution: Recover excess refrigerant

**Low Refrigerant:**
- Low pressure cutout trips
- Solution: Find leak, repair, recharge

**Bad Compressor:**
- Internal overload tripping
- Failing compressor
- Solution: Replace compressor or unit

**Electrical Issue:**
- Loose wire
- Bad contactor
- Weak capacitor
- Solution: Identify and repair

**Problem: High Electric Bills**

**Customer's Most Common Complaint:**

**Check for Inefficiency:**

**Dirty System:**
- Filter changed regularly?
- Outdoor coil clean?
- Indoor coil clean?
- All impact efficiency significantly

**Incorrect Charge:**
- Either overcharge or undercharge
- Both reduce efficiency
- Check superheat and subcooling
- Adjust charge to manufacturer specs

**Poor Airflow:**
- Undersized return ducts
- Excessive duct leakage (test with manometer)
- Blocked registers or returns
- Wrong blower speed

**Equipment Age:**
- Systems over 15 years old much less efficient
- SEER ratings improved dramatically
- Old: SEER 8-10, New: SEER 14-20+
- Replacement may be justified

**Thermostat Programming:**
- Not using setback/setup features
- Setting too low in summer (every degree = 3% cost)
- Teach customer energy-saving settings

**Insulation/Sealing:**
- Poor insulation in attic/walls
- Air leaks around house
- Not HVAC fix, but affects bills
- Recommend energy audit

**Refrigerant Diagnosis**

**Key Measurements:**

**Suction Pressure:**
- Low side gauge
- Converted to saturation temperature
- Compare to actual suction line temp

**Discharge Pressure:**
- High side gauge
- Should correlate with outdoor temperature
- Too high = overcharge, restriction, or dirty condenser
- Too low = undercharge or bad compressor

**Superheat (How much vapor):**
- Suction line temp - Saturation temp
- Fixed orifice: 10-15°F typical
- TXV: 8-12°F typical
- High superheat = Undercharged or restriction
- Low superheat = Overcharged or bad TXV

**Subcooling (How much liquid):**
- Saturation temp - Liquid line temp
- Should be 10-15°F
- High subcooling = Overcharged or restriction
- Low subcooling = Undercharged

**Proper Charging Method:**

**Fixed Orifice System:**
1. Check superheat
2. Adjust charge to achieve proper superheat
3. Verify subcooling in acceptable range

**TXV System:**
1. Check subcooling
2. Adjust charge to achieve proper subcooling
3. Verify superheat controlled by TXV

**Electrical Diagnostics**

**Checking Compressor Windings:**

**Three Terminals: C, R, S**
- **C to R**: Run winding
- **C to S**: Start winding  
- **R to S**: Both windings in series

**Resistance Checks (Compressor Off!):**
- R + S should = C reading
- Typical values: 2-4 ohms (varies by size)
- Infinite resistance = Open winding (bad)
- Zero or very low = Shorted winding (bad)
- Any terminal to ground = Grounded (bad)

**Checking Capacitors:**

**Run Capacitor:**
- Connected to compressor or fan motor
- Rated in microfarads (µF)
- Should be within ±6% of rating
- Use capacitor tester, not ohmmeter
- Bulging or leaking = Bad

**Start Capacitor:**
- Only on hard-start kits
- Much higher µF rating
- Should only be in circuit briefly
- Relay disconnects after start

**Symptoms of Bad Capacitor:**
- Hard starting
- Won't start at all
- Compressor hums but won't run
- Motor overheating
- Reduced performance

**Airflow Diagnosis**

**Measuring Airflow:**

**Rule of Thumb:**
- 400 CFM per ton of cooling
- 3-ton system = 1200 CFM

**Static Pressure Method:**
- Measure pressure drop across coil
- Compare to manufacturer spec
- High pressure = Restricted airflow
- Requires manometer

**Temperature Rise Method (Heating):**
- Measure supply and return temp
- Calculate rise: Supply - Return
- Should match furnace rating (usually 40-70°F)
- Too high = Low airflow
- Too low = Excess airflow or furnace issue

**Common Airflow Issues:**
- Undersized return (very common)
- Duct leakage (30% loss not uncommon)
- Dirty evaporator coil
- Wrong blower speed/CFM
- Flexduct kinked or crushed

**Documenting Your Diagnosis**

**Record Everything:**
- Suction and discharge pressures
- Superheat and subcooling
- Supply and return temperatures
- Voltage readings
- Amperage readings
- Visual observations

**Photos:**
- Damaged components
- Dirty coils
- Incorrect installations
- Before and after

**Benefits:**
- Justifies your recommendations
- Protects against liability
- Helps with warranty claims
- Reference for future service

**Advanced Diagnostic Techniques**

**Acid Test:**
- Tests for acid in system (from moisture and heat)
- Indicates need for cleanup or compressor failure coming
- Uses acid test kit

**Oil Analysis:**
- Remove oil sample from compressor
- Check for metal particles, contamination
- Indicates compressor health

**Vibration Analysis:**
- Measure bearing vibration
- Predicts impending failure
- Requires specialized equipment

**Thermal Imaging:**
- Identifies hot connections
- Finds duct leaks
- Locates missing insulation
- Expensive tool but very useful

**Communicating Your Findings**

**To the Customer:**
- Explain in simple terms
- Show photos if possible
- Provide written estimates
- Explain safety concerns clearly
- Offer options when appropriate

**Example:**
"Your AC isn't cooling because the evaporator coil is frozen solid. This happened because your air filter was completely blocked, which restricted airflow. I've replaced the filter and let the ice melt. The system is working now, but you need to change this filter every month to prevent this from happening again. I'll show you where it is."

**Remember: Good diagnosis takes time. Don't rush. Collect data, analyze it, and only then make your repair recommendation. Guessing and throwing parts at problems wastes money and damages your reputation.**`
      },
      { 
        title: 'Thermostat Installation', 
        content: 'Install and program smart and traditional thermostats.',
        fullContent: `**Thermostat Installation and Programming**

Thermostat installation is one of the most common HVAC tasks. This lesson covers both traditional and smart thermostat installation, wiring, and programming.

**Pre-Installation Considerations**

**Choosing the Right Location:**

**Requirements:**
- On interior wall (not exterior)
- About 5 feet from floor
- Away from direct sunlight
- Away from drafts (doors, windows)
- Away from heat sources (lamps, appliances, TV)
- Away from supply vents
- In frequently occupied area
- Not in hallway near bedrooms (room doors affect temp)

**Common Location Mistakes:**
- Above supply register (reads too low)
- On exterior wall (temperature fluctuations)
- In direct sun from window (reads too high)
- Near kitchen (heat from cooking)
- In rarely used room (doesn't reflect home temp)

**Understanding Thermostat Wiring**

**Standard Color Codes:**

**Power:**
- **R (Red)**: 24V hot from transformer
- **Rc (Red)**: 24V hot for cooling (if separate transformers)
- **Rh (Red)**: 24V hot for heating (if separate transformers)
- **C (Blue/Black)**: Common, 24V return path

**Outputs:**
- **W (White)**: Heat (furnace or boiler)
- **W2 (Brown)**: Second stage heat
- **Y (Yellow)**: Cool (air conditioning)
- **Y2 (Light Blue)**: Second stage cool
- **G (Green)**: Fan (circulate only)
- **O (Orange)**: Reversing valve heating (heat pump)
- **B (Blue)**: Reversing valve cooling (some heat pumps)
- **X/AUX (Various)**: Auxiliary heat (heat pump backup)
- **L (Gray)**: Low battery indicator
- **K (Various)**: Miscellaneous control

**Common Wiring Configurations:**

**Air Conditioning + Gas Furnace:**
- R, C, W, Y, G (5 wires minimum)

**Heat Pump:**
- R, C, Y, G, O/B, W/E (6 wires minimum)

**AC Only:**
- R, C, Y, G (4 wires minimum)

**Heat Only:**
- R, C, W, G (4 wires minimum)

**Installing Traditional Thermostats**

**Tools Needed:**
- Screwdriver (usually Phillips)
- Wire strippers
- Level
- Drill with bits
- Anchors (for drywall)
- Pencil

**Step-by-Step:**

**1. Turn Off Power:**
- Flip breaker for HVAC system
- Verify power off at system

**2. Remove Old Thermostat:**
- Remove cover/faceplate
- Take photo of wire connections
- Label wires if not already labeled
- Disconnect wires from terminals
- Remove mounting base from wall

**3. Check Wires:**
- Pull gently - is there slack?
- If wires short, may need to pull more from wall
- Strip 1/4" if ends damaged
- Note how many wires you have

**4. Install New Base:**
- Thread wires through opening
- Level the base on wall
- Mark mounting holes
- Drill holes if needed (use anchors for drywall)
- Attach base with screws

**5. Connect Wires:**
- Match colors to terminal labels
- Wrap bare wire clockwise around screw
- Tighten screws firmly
- Tuck excess wire into wall

**6. Attach Faceplate:**
- Snap or screw faceplate to base
- Insert batteries if required

**7. Restore Power and Test:**
- Turn breaker back on
- Follow manufacturer's setup procedure
- Test heat, cool, and fan functions

**The C-Wire Issue**

**Why Smart Thermostats Need C-Wire:**
- Powered constantly (WiFi, display, processing)
- Traditional thermostats "steal" power when not calling
- Smart thermostats draw too much power to steal
- C-wire provides dedicated return path for power

**Solutions When C-Wire Missing:**

**Option 1: Pull New Wire**
- Run new thermostat wire from air handler to thermostat
- Easiest if easy attic/basement access
- Professional solution

**Option 2: Use G-Wire as C-Wire**
- If you don't use "fan only" mode
- Repurpose green wire as common
- Install jumper at air handler (G to C)
- Loses manual fan control

**Option 3: C-Wire Adapter**
- Small device at air handler
- Uses existing wires differently
- Creates virtual C-wire
- Common adapters: Venstar Add-A-Wire, Fast-Stat Common Maker
- Includes detailed instructions

**Option 4: Use Battery-Powered Thermostat**
- Some smart thermostats work without C-wire
- May have limitations
- Batteries need regular changing

**Installing Smart Thermostats**

**Popular Brands:**
- **Nest**: Learning algorithm, sleek design, Google integration
- **Ecobee**: Remote sensors, Alexa built-in
- **Honeywell Home**: Traditional company, reliable
- **Emerson Sensi**: Budget-friendly, WiFi enabled

**Additional Considerations:**

**Compatibility:**
- Check manufacturer compatibility checker
- Verify voltage (24V standard, some use 120V)
- Confirm heating/cooling type supported
- Some systems not compatible (millivolt, some heat pumps)

**WiFi Requirements:**
- Need strong signal at thermostat location
- Requires 2.4GHz network (most routers support this)
- Need WiFi password for setup

**Installation Steps (Nest Example):**

**1. Turn Off Power**
- Same as traditional

**2. Remove Old Thermostat**
- Take photo of wiring
- Note wire labels

**3. Install Nest Base**
- Level base
- Mark and drill if needed
- Insert wall anchors
- Thread wires through base
- Secure base to wall

**4. Connect Wires to Base**
- Push each wire into corresponding terminal
- Base has spring terminals (push to release)
- Wires labeled same as traditional
- Press each wire firmly until clicks

**5. Attach Display**
- Align display with base
- Press until clicks
- Display powers on

**6. Follow On-Screen Setup**
- Select language
- Connect to WiFi
- Set location
- Answer questions about your system
- Nest tests each wire connection
- Completes setup

**7. Install Trim Kit (Optional)**
- Covers old thermostat marks
- Snap into place around base

**Programming and Setup**

**Traditional Programmable Thermostats:**

**Program Types:**
- **7-Day**: Different schedule each day
- **5-2-Day**: Weekday schedule, weekend schedule
- **5-1-1**: Weekdays, Saturday, Sunday separate

**Common Schedule Example:**

**Weekday:**
- 6:00 AM: Wake (68°F heat / 78°F cool)
- 8:00 AM: Away (62°F heat / 85°F cool)
- 5:00 PM: Return (68°F heat / 78°F cool)
- 10:00 PM: Sleep (65°F heat / 80°F cool)

**Weekend:**
- 8:00 AM: Wake (68°F heat / 78°F cool)
- 11:00 PM: Sleep (65°F heat / 80°F cool)

**Smart Thermostat Setup:**

**Nest Learning:**
- No manual programming needed
- Learns your preferences over time
- Adjusts schedule automatically
- Can manually override and adjust
- Auto-Away feature when home is empty

**Ecobee with Sensors:**
- Place sensors in frequently used rooms
- Thermostat averages temperature across sensors
- "Follow Me" mode uses occupied room temps only
- Set comfort settings (Home, Away, Sleep)
- Schedule when each mode activates

**Advanced Features:**

**Geofencing:**
- Uses phone location
- Automatically adjusts when you leave/return
- Can use multiple family member phones
- Saves energy without sacrificing comfort

**Energy Reports:**
- Shows usage patterns
- Compares to similar homes
- Suggests efficiency improvements
- Motivates energy-conscious behavior

**Remote Access:**
- Control from anywhere via app
- Check temperature before arriving home
- Adjust if you forgot to change before leaving
- Monitor system operation

**Voice Control:**
- "Alexa, set temperature to 72"
- "Hey Google, turn up the heat"
- Works with most smart home platforms

**Integration:**
- Connect to smart home systems
- Automation rules (if security alarm armed, set Away mode)
- Scenes (Movie Night = lower temp slightly)

**Troubleshooting Common Issues**

**Display Blank:**
- Check power (C-wire or batteries)
- Verify breaker not tripped
- Check transformer at air handler (should be 24-28V)
- Check for loose wire

**WiFi Won't Connect:**
- Verify 2.4GHz network available
- Check password entered correctly
- Ensure router within range
- Restart thermostat
- Restart router

**System Not Responding:**
- Verify wires connected correctly
- Check if system works in manual mode (at air handler)
- Verify correct settings (heat/cool mode, proper setpoints)
- Test wiring with multimeter

**Short Cycling:**
- Check differential/swing setting (too small)
- Verify compressor protection delay enabled
- Location issue (near vent or sun)
- System problem, not thermostat

**Temperature Inaccurate:**
- Bad location (sun, drafts, vents)
- Calibration may be off
- Some thermostats have calibration adjustment
- May need to relocate

**Customer Education**

**Show Customer How To:**
- Change temperature
- Switch between heat and cool
- Use hold/vacation mode
- Change batteries (if applicable)
- Access app and create account
- Set up voice control if desired

**Provide Information About:**
- Efficient temperature settings (68°F winter, 78°F summer)
- Energy saving features
- How to contact you for service
- Basic troubleshooting (check breaker first)

**Provide Written Info:**
- Your contact information
- WiFi network and password (if you set it up)
- User manual
- Warranty information

**Billing Considerations**

**Typical Charges:**
- Thermostat installation: $125-250 labor
- Smart thermostat installation with C-wire run: $200-400
- C-wire adapter installation: $100-150
- Plus cost of thermostat if you supply it
- Many customers buy thermostat themselves (Amazon, etc.)

**Upselling Opportunities:**
- Smart thermostat when replacing basic model
- Remote sensors for better comfort
- Smart home integration consultation
- Energy audit or efficiency assessment

**Remember: Thermostat installation is often a customer's first experience with your company. Do it well, explain things clearly, and you'll get repeat business and referrals. Many customers specifically search for smart thermostat installation help!**`
      },
      { title: 'Ductwork', content: 'Design, install, and seal ductwork for efficiency.' },
      { title: 'Refrigerant Handling', content: 'Learn safe recovery, charging, and leak detection.' },
      { title: 'Preventive Maintenance', content: 'Perform seasonal maintenance and inspections.' },
      { title: 'Customer Communication', content: 'Develop skills for explaining repairs and maintenance to clients.' }
    ]
  },
  {
    title: 'Welder Training',
    description: 'Master welding techniques, safety, and fabrication with real-time AI feedback and virtual practice environments.',
    lessons: [
      { 
        title: 'Welding Safety', 
        content: 'Review PPE, fire prevention, and safe workspace setup.',
        fullContent: `**Welding Safety Fundamentals**

Welding is one of the most hazardous trades, involving intense heat, bright light, electricity, and toxic fumes. Strict adherence to safety protocols is essential for your health and survival.

**Personal Protective Equipment (PPE)**

**Eye and Face Protection:**

**Welding Helmet:**
- Most critical piece of PPE
- Protects from ultraviolet (UV) and infrared (IR) radiation
- **Auto-Darkening vs Passive:**
  - Auto-darkening: Lens darkens automatically when arc strikes
  - Passive: Fixed shade lens, must nod to drop helmet
  - Auto-darkening preferred for comfort and safety

**Shade Numbers:**
- **SMAW (Stick): Shade 10-13**
- **GMAW (MIG): Shade 10-13**
- **GTAW (TIG): Shade 10-14**
- **Oxy-Fuel: Shade 3-6**
- Higher number = darker lens
- Too light = eye damage (arc eye/welder's flash)
- Too dark = can't see work properly

**Safety Glasses:**
- Wear under helmet always
- Protects when grinding
- Protects from sparks and debris
- Side shields required

**Body Protection:**

**Welding Jacket:**
- Flame-resistant leather or treated cotton
- Covers torso and arms
- No polyester (melts to skin!)
- Cape/bib attachment for overhead work

**Welding Gloves:**
- Heat-resistant leather
- Different styles:
  - MIG gloves: Thinner, more dexterity
  - Stick gloves: Thicker, more heat protection
  - TIG gloves: Thinnest, maximum dexterity
- Keep dry (water conducts heat and electricity)

**Clothing:**
- Long-sleeve cotton shirt (button-up, not pullover)
- Long pants (no cuffs - trap sparks)
- High-top boots (steel toe)
- No exposed skin
- No synthetic fabrics

**Respiratory Protection:**

**Welding Fumes:**
- Metal oxides, ozone, gases
- Short-term: Irritation, nausea, flu-like symptoms
- Long-term: Lung damage, cancer, neurological damage
- Depends on material being welded

**When to Wear Respirator:**
- Confined spaces (always)
- Poor ventilation
- Galvanized steel (zinc oxide fumes - very toxic)
- Stainless steel (chromium fumes)
- Painted or coated metals
- Aluminum (ozone production)

**Types:**
- Half-mask respirator with P100 filters (minimum)
- PAPR (Powered Air Purifying Respirator) - best option
- Supplied air for extreme conditions

**Fire Hazards and Prevention**

**Welding Creates:**
- Sparks flying 35+ feet
- Slag that stays hot for minutes
- UV radiation that ignites materials
- Open flame (oxy-fuel)

**Fire Prevention:**

**Before Welding:**
1. Check area within 35-foot radius
2. Remove all flammable materials
3. Cover what can't be removed with fire blankets
4. Ensure concrete floor or metal table
5. Have fire extinguisher within reach (10 feet)
6. Have fire watch for 30 minutes after welding

**Fire Watch Duties:**
- Monitor work area during and after welding
- Check for smoldering materials
- Have extinguisher ready
- Know escape routes
- Required by insurance/OSHA for hot work

**Fire Extinguisher Types:**
- **Class A**: Wood, paper, cloth
- **Class B**: Flammable liquids
- **Class C**: Electrical fires
- **Class D**: Metal fires (magnesium, titanium)
- **ABC**: All-purpose (keep in shop)

**Electrical Safety**

**Hazards:**
- Arc welders use high amperage
- Shock can be fatal
- Water or moisture increases risk
- Metal conducts electricity

**Safety Rules:**
1. **Never weld in water or rain**
2. **Wear dry gloves** - wet = conductor
3. **Insulate yourself from ground** - rubber mat, dry wood
4. **Don't touch electrode and ground simultaneously**
5. **Keep cables in good condition** - no exposed wire
6. **Turn off machine before changing electrode**
7. **Properly ground machine and workpiece**

**Primary Shock (Welding Circuit):**
- Open circuit voltage: 20-80V
- Can be dangerous in wet conditions
- Most common welding shock

**Secondary Shock (Input Power):**
- 120V, 240V, or 480V
- Potentially fatal
- Only qualified electricians work on power connections

**Ventilation and Fume Control**

**Fumes Are Serious:**
- You can't see all welding fumes
- Damage is cumulative over career
- Use ventilation every time, not just when "bad"

**Ventilation Methods:**

**Natural Ventilation:**
- Open doors and windows
- Minimum 10,000 cubic feet per welder
- Air movement required
- Not sufficient for most indoor welding

**Local Exhaust:**
- Fume extractor at weld point
- Flexible arm with hood
- Most effective method
- Portable or fixed installation

**General Ventilation:**
- Fans moving air through shop
- Dilutes but doesn't remove fumes
- Supplement to local exhaust

**Proper Technique:**
- Position head to side of fumes
- Don't breathe directly over weld
- Use extractor within 12 inches of arc

**Arc Radiation Hazards**

**UV Radiation:**
- **Arc Eye (Welder's Flash)**: Like bad sunburn on cornea
- Symptoms: Gritty feeling, pain, tearing (appears 3-12 hours after exposure)
- Treatment: Cold compress, pain reliever, darkness, see doctor if severe
- Permanent damage possible with repeated exposure

**Protect Nearby Workers:**
- Use welding screens/curtains
- Yellow curtains filter UV but allow vision
- Post "Welding in Progress" signs
- Never look at arc without proper shade

**Infrared Radiation:**
- Heat from arc
- Can cause cataracts over time
- Proper helmet shade protects

**Visible Light:**
- Extremely bright
- Can damage vision
- "Welder's Marks" on skin

**Compressed Gas Safety**

**Cylinder Handling:**
- **Always secure with chain or strap** - falling cylinder can explode
- Store upright
- Valve protection cap on when not in use
- Never lift by cap
- Transport on cylinder cart
- Store separately (oxygen away from fuel gases)

**Regulators:**
- Clean oxygen regulator threads (no oil/grease)
- Crack valve before attaching regulator (quick open/close to blow out debris)
- Stand to side when opening valve
- Open slowly
- Close valves when not in use

**Oxygen Safety:**
- **Never use oxygen to blow off clothing or workspace**
- Greatly accelerates combustion
- Oil + oxygen = explosion
- Clothing saturated with oxygen extremely flammable

**Acetylene Safety:**
- Never exceed 15 PSI (unstable, can explode)
- Never use copper fittings (forms explosive compound)
- Flashback arrestors required
- Unstable if cylinder on side (acetone can escape)

**Confined Space Welding**

**Definition:**
- Limited entry/exit
- Not designed for continuous occupancy
- Examples: tanks, vessels, pipes, pits

**Additional Hazards:**
- Fumes concentrate quickly
- Oxygen depletion
- Difficult escape in emergency
- Increased electric shock risk

**Requirements:**
- Atmospheric testing before entry
- Continuous ventilation
- Attendant outside space
- Rescue plan and equipment
- Entry permit
- Communication system
- Supplied air often required

**Never enter confined space alone or without proper training and equipment.**

**Workspace Organization**

**Keep Area Clear:**
- Trip hazards cause accidents
- Clear cables and hoses
- Organize tools
- Clean up slag and spatter regularly

**Proper Table/Surface:**
- Fire-resistant surface
- Adequate grounding
- Stable and level
- Proper height (avoid back strain)

**Eye Wash Station:**
- Within 10 seconds of work area
- Test weekly
- Know location before you need it

**Proper Clothing Habits**

**What NOT to Wear:**
- Rings (can catch current, trap heat)
- Watches
- Synthetic fabrics
- Rolled cuffs (trap sparks)
- Loose clothing (catches fire)
- Frayed clothing

**Proper Practice:**
- Button collar (sparks down neck)
- Keep pants over boots (sparks in boots)
- Tie back long hair
- Remove flammable materials from pockets (lighter, phone)

**First Aid for Welding Injuries**

**Arc Eye:**
- Cold compress
- Dark room
- Over-the-counter pain relief
- See doctor if doesn't improve in 24 hours

**Burns:**
- Cool (not ice) for 10-20 minutes
- Cover with clean, dry cloth
- Seek medical attention for serious burns
- Don't pop blisters

**Electric Shock:**
- **Do not touch victim if still in contact**
- Shut off power if possible
- Call 911 immediately
- Begin CPR if trained and needed

**Fume Exposure:**
- Move to fresh air
- Sit upright (easier breathing)
- Monitor condition
- Seek medical attention if symptoms severe

**Safety Culture**

**Your Responsibility:**
- Wear all PPE every time
- Don't take shortcuts
- Speak up about unsafe conditions
- Keep learning about safety
- Set example for others

**Employer Responsibility:**
- Provide proper PPE
- Maintain safe equipment
- Offer safety training
- Support safety-first culture
- Never pressure workers to skip safety

**Remember: Welding is dangerous. People have been seriously injured and killed by ignoring safety rules. Every single safety rule exists because someone got hurt. Don't become a statistic—use proper PPE, follow procedures, and stay alert.**`
      },
      { 
        title: 'Welding Techniques', 
        content: 'Learn MIG, TIG, and stick welding basics with video and AR guidance.',
        fullContent: `**Welding Techniques: MIG, TIG, and Stick**

This lesson covers the three most common welding processes, their applications, advantages, and basic techniques.

**Understanding the Welding Arc**

All arc welding processes create an electrical arc between an electrode and the base metal:

- **Heat**: Arc temperature reaches 10,000°F+
- **Light**: Intense UV and IR radiation
- **Metal Transfer**: Molten electrode transfers to base metal
- **Shielding**: Protects molten metal from atmosphere

**Contamination from atmosphere causes:**
- Porosity (holes in weld)
- Brittleness
- Weak welds
- Different processes shield the weld differently

**SMAW (Shielded Metal Arc Welding) - "Stick Welding"**

**Overview:**
- Most versatile process
- Works in wind and weather
- Equipment is portable and inexpensive
- Can weld in all positions
- Common in construction, repair, pipe welding

**How It Works:**
- Flux-coated electrode (stick)
- Arc melts electrode and base metal
- Flux vaporizes, creating gas shield
- Flux also forms slag coating over weld
- Slag must be chipped off after welding

**Equipment:**

**Welding Machine:**
- Transformer, inverter, or engine-driven
- Adjustable amperage
- DC or AC (DC preferred for most applications)
- Relatively inexpensive

**Electrode Holder (Stinger):**
- Holds electrode
- Connects to machine via cable
- Spring-loaded or screw-type clamp

**Ground Clamp:**
- Connects workpiece to machine
- Completes electrical circuit
- Must have good contact (clean metal)

**Electrodes (Rods):**

**Naming System:**
- E6010: E = Electrode, 60 = 60,000 PSI tensile strength, 1 = all positions, 0 = power type/coating

**Common Electrodes:**

**E6010/E6011:**
- Deep penetration
- Works on dirty metal
- All position
- Used for pipe, structural
- Runs on DC (6010) or AC (6011)

**E6013:**
- Easy to use
- Light penetration
- Good for thin metal
- Smooth bead appearance
- Good for beginners

**E7018:**
- Low hydrogen (prevents cracking)
- Smooth bead
- Strong weld
- All position
- Most common for structural steel
- Must be kept dry (store in oven)

**E7024:**
- Fast deposition
- Flat and horizontal only
- Good for thick metal
- Drag rod technique

**Diameter:**
- 1/16", 5/64", 3/32", 1/8", 5/32", 3/16", 1/4"
- Thin metal: smaller diameter
- Thick metal: larger diameter
- Diameter determines amperage range

**Stick Welding Technique:**

**Setup:**
1. Select proper electrode for material and position
2. Set amperage (refer to electrode box)
3. Insert electrode in holder at 90° angle
4. Attach ground clamp to clean metal
5. Check all connections

**Arc Length:**
- Distance between electrode tip and workpiece
- Should equal electrode diameter
- Too short: Electrode sticks
- Too long: Wide, weak bead with spatter

**Angles:**

**Travel Angle:**
- **Push**: 5-15° leading the weld
- **Drag**: 5-15° trailing the weld
- Drag more common for stick

**Work Angle:**
- Perpendicular for flat position
- 45° for fillet welds
- Adjust for other positions

**Motion:**
- Straight bead (stringers)
- Slight weave (1-3x electrode width)
- Consistent speed = consistent bead

**Starting and Stopping:**
1. **Starting**: Scratch or tap electrode to strike arc
2. Establish arc length immediately
3. Begin travel at consistent speed
4. **Stopping**: Pause slightly, then lift and break arc
5. **Restarting**: Clean slag, grind crater, restart ahead of crater and weld back through

**Common Stick Problems:**

**Electrode Sticks:**
- Amperage too low
- Arc length too short
- Wrong electrode for material
- Twist quickly to break free if stuck

**Excessive Spatter:**
- Amperage too high
- Arc length too long
- Wrong electrode angle
- Contaminated metal

**Porosity:**
- Damp electrodes (especially 7018)
- Too fast travel speed
- Contaminated metal (rust, paint, oil)

**GMAW (Gas Metal Arc Welding) - "MIG Welding"**

**Overview:**
- Easiest process to learn
- Continuous wire feed
- Clean welds (no slag)
- High productivity
- Common in manufacturing, automotive, fabrication

**How It Works:**
- Solid wire electrode fed continuously
- Shielding gas flows from nozzle
- Arc melts wire and base metal
- No flux, no slag to remove
- Can weld for extended periods

**Equipment:**

**MIG Welder:**
- Wire feed unit integrated or separate
- Voltage and wire speed adjustable
- DC power only (electrode positive typically)

**MIG Gun:**
- Trigger controls wire feed and gas
- Contact tip conducts electricity to wire
- Nozzle directs shielding gas
- Replaceable consumables (tips, nozzles)

**Shielding Gas:**

**Pure CO2:**
- Cheapest option
- Deep penetration
- More spatter
- Used for thick steel

**75/25 (Argon/CO2):**
- Most common mix
- Less spatter
- Better arc stability
- Cleaner welds
- "Tri-mix" variations available

**Argon/Oxygen or Argon/CO2:**
- For stainless steel

**Pure Argon:**
- For aluminum
- For stainless (with small amount O2)

**Wire Types:**

**ER70S-6:**
- Most common mild steel wire
- Good all-purpose
- Contains deoxidizers

**ER70S-3:**
- Clean metal only
- Fewer deoxidizers

**Flux-Cored (FCAW):**
- Tubular wire with flux inside
- Can weld without gas (self-shielded)
- Better penetration than solid wire
- More spatter, slag to remove

**Aluminum Wire:**
- ER4043 or ER5356
- Requires spool gun or teflon liner
- Pure argon gas

**Stainless Steel Wire:**
- ER308L most common
- Tri-mix gas

**Wire Diameter:**
- .023", .030", .035", .045"
- Thin metal: smaller wire
- Thick metal: larger wire

**MIG Welding Technique:**

**Setup:**
1. Select wire and gas for material
2. Install wire on feed unit
3. Set voltage and wire speed (consult chart)
4. Set gas flow (15-20 CFM typical)
5. Install proper contact tip for wire size

**Gun Angle:**

**Travel Angle:**
- **Push (Forehand)**: 10-15° leading the puddle
- Benefits: Better visibility, flatter bead, less penetration
- Good for thin metal

- **Pull (Backhand)**: 10-15° trailing
- Benefits: More penetration, narrower bead
- Good for thick metal

**Work Angle:**
- 90° for flat position
- 45° for fillet welds

**Technique:**
- **Spray Transfer**: High voltage/amperage, steady hiss, minimal spatter
- **Short Circuit**: Lower settings, popping sound, good for thin metal
- **Globular**: Not desirable, irregular metal transfer

**Travel Speed:**
- Fast enough to stay ahead of puddle
- Slow enough for good fusion
- Consistent speed = consistent bead

**Weaving:**
- Usually straight beads (stringers)
- Slight side-to-side for wider beads
- Pause at sides, move quickly through middle

**Common MIG Problems:**

**Porosity:**
- Wind blowing away shielding gas
- Gas flow too low or too high
- Dirty metal (mill scale, rust, oil)
- Contaminated wire
- Gas cylinder empty

**Lack of Fusion:**
- Voltage too low
- Wire speed too high
- Travel speed too fast
- Wrong angle

**Burn-Through:**
- Voltage too high
- Wire speed too low
- Travel speed too slow
- Metal too thin for settings

**GTAW (Gas Tungsten Arc Welding) - "TIG Welding"**

**Overview:**
- Highest quality welds
- Maximum control
- Clean, precise
- Can weld exotic metals
- No spatter or slag
- Slower than other processes
- Requires most skill

**How It Works:**
- Non-consumable tungsten electrode creates arc
- Separate filler rod added manually
- Argon gas shield
- Very precise heat control
- Like gas welding but with electric arc

**Equipment:**

**TIG Welder:**
- AC/DC capability (AC for aluminum, DC for steel)
- High-frequency start (touch-less arc start)
- Foot pedal or thumb control for amperage
- Precise adjustments
- Usually more expensive than MIG/Stick

**TIG Torch:**
- Tungsten electrode holder
- Shielding gas flows through
- Ceramic cup sizes (4-12, larger number = more gas coverage)
- Back cap for electrode adjustment
- Air or water-cooled (water for high amperage)

**Tungsten Electrodes:**

**Pure Tungsten (Green):**
- AC welding (aluminum)
- Ball end when AC welding

**2% Thoriated (Red):**
- DC welding (steel, stainless)
- Radioactive (low level, being phased out)
- Pointed end for DC

**2% Lanthanated (Blue):**
- AC or DC
- Non-radioactive
- Replacing thoriated
- Good all-around choice

**2% Ceriated (Orange):**
- Low amperage DC
- Good for thin materials

**Electrode Preparation:**
- Grind to point for DC (30° angle)
- Grind lengthwise (not circumference)
- Ball end forms automatically for AC
- Clean electrodes = no contamination

**Filler Rod:**
- ER70S-2 for mild steel
- ER308L for stainless steel
- ER4043 or ER5356 for aluminum
- Diameter: 1/16" to 1/8" common
- Match filler to base metal

**TIG Welding Technique:**

**Grip:**
- Hold torch like a pen
- Rest little finger on work for steady hand
- Comfortable, relaxed grip

**Torch Angle:**
- **Travel angle**: 10-20° from vertical, pushing forward
- **Work angle**: 90° for flat, 45° for fillet

**Arc Length:**
- Very short (1/8" or less)
- Longer = wider, less concentrated arc
- Consistent arc length crucial

**Filler Rod:**
- Enter puddle at 15-20° angle
- Add rod to leading edge of puddle
- Dip and withdraw (don't drag through puddle)
- Consistent dipping rhythm

**Foot Pedal Control:**
- Start low, increase to establish puddle
- Maintain during welding
- Reduce at end to fill crater
- Smooth control comes with practice

**Walking the Cup:**
- For pipe welding
- Rest cup on work and pivot
- Steady, consistent technique
- Takes practice

**TIG Techniques for Different Materials:**

**Steel (DC):**
- DCEN (electrode negative)
- Pointed tungsten
- Push technique
- ER70S-2 filler

**Stainless Steel (DC):**
- DCEN
- Pointed tungsten
- Push technique
- ER308L filler
- Watch for distortion (less heat input than steel)

**Aluminum (AC):**
- AC current
- Balled tungsten (forms automatically)
- Argon gas
- ER4043 filler (forgiving) or ER5356 (stronger)
- Clean metal thoroughly (wire brush, acetone)
- High heat input needed

**Common TIG Problems:**

**Tungsten Contamination:**
- Filler rod touched tungsten
- Tungsten dipped in puddle
- Turns black and spatters
- Solution: Grind clean and reshape

**Porosity:**
- Dirty metal (especially aluminum oxide on aluminum)
- Insufficient gas coverage
- Wind affecting shielding
- Contaminated tungsten or filler

**Burn-Through:**
- Too much heat
- Too slow travel
- Reduce amperage or increase speed

**Lack of Fusion:**
- Insufficient heat
- Too fast travel
- Increase amperage or slow down

**Process Comparison**

**Stick:**
- ✅ Works outdoors, wind
- ✅ Inexpensive equipment
- ✅ Works on dirty metal
- ❌ Slower (slag removal)
- ❌ More skill needed
- **Best for:** Construction, repair, pipe, outdoor work

**MIG:**
- ✅ Fastest process
- ✅ Easiest to learn
- ✅ No slag removal
- ❌ Needs clean metal
- ❌ Wind affects shielding
- **Best for:** Production, automotive, general fabrication

**TIG:**
- ✅ Highest quality
- ✅ Best control
- ✅ Works on exotic metals
- ❌ Slowest process
- ❌ Most skill required
- ❌ Most expensive
- **Best for:** Precision work, thin metal, aluminum, stainless, aerospace

**Practice Exercises**

**Beginner:**
1. Straight beads on flat plate (all processes)
2. Goal: Consistent width and height
3. Multiple passes across plate

**Intermediate:**
1. Fillet welds (T-joints)
2. Butt joints
3. Multiple positions (flat, horizontal, vertical)

**Advanced:**
1. Overhead position
2. Pipe welding
3. Different materials
4. Multi-pass welds

**Remember: Welding is a hands-on skill. Reading about it helps understand concepts, but you must practice to develop muscle memory and visual judgment. Start slow, focus on consistency, and gradually increase difficulty. Every professional welder started exactly where you are now.**`
      },
      { title: 'Project Practice', content: 'Complete a virtual weld and get instant feedback on technique.' },
      { title: 'Metal Preparation', content: 'Clean, cut, and prep metal for strong welds.' },
      { title: 'Blueprint Reading', content: 'Interpret welding symbols and fabrication drawings.' },
      { title: 'Weld Inspection', content: 'Check welds for quality and code compliance.' },
      { title: 'Fabrication Projects', content: 'Build real and virtual projects from plans.' },
      { title: 'Welding Automation', content: 'Intro to robotic and automated welding systems.' }
    ]
  }
];

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h3" align="center" gutterBottom color="text.primary">
        Welcome to VocSprint
      </Typography>
      <Typography variant="h6" align="center" paragraph color="text.secondary">
        Empowering the next generation of skilled tradespeople with AI-driven training.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {trainings.map((t) => (
          <Grid item xs={12} md={4} key={t.title}>
            <TrainingModuleCard title={t.title} description={t.description} lessons={t.lessons} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
