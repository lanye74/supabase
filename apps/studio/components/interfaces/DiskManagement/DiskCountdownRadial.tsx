import { AnimatePresence, motion } from 'framer-motion'

import { COOLDOWN_DURATION } from 'data/config/disk-attributes-update-mutation'
import { Card, CardContent } from 'ui'
import CountdownTimerRadial from '../../ui/CountdownTimer/CountdownTimerRadial'
import CountdownTimerSpan from '../../ui/CountdownTimer/CountdownTimerSpan'

export function DiskCountdownRadial({
  remainingTime,
  show = true,
}: {
  remainingTime: number
  show?: boolean
}) {
  const progressPercentage = (remainingTime / COOLDOWN_DURATION) * 100

  return (
    <AnimatePresence>
      {remainingTime !== 0 && show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="px-2 rounded bg-surface-100">
            <CardContent className="py-3 flex gap-3 px-3 items-center">
              <CountdownTimerRadial progress={progressPercentage} />
              <div className="flex flex-col">
                <p className="text-foreground text-sm p-0">
                  6-hour wait period between disk modifications
                </p>
                <p className="text-foreground-lighter text-sm p-0">
                  You can't modify your disk configuration until the 6-hour cool down period ends.
                  You can however change the compute size..
                </p>
                <CountdownTimerSpan seconds={remainingTime} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
