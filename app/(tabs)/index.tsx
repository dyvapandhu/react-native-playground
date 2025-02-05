import React from 'react';
import {
  Accordion,
  AlertDialog,
  Button,
  Paragraph,
  ScrollView,
  Square,
  XStack,
  YStack,
} from 'tamagui';

export default function HomeScreen() {
  return (
    <ScrollView width="100%" backgroundColor="$background" padding="$5" borderRadius="$4">
      <Accordion overflow="hidden" width="100%" type="multiple">
        <Accordion.Item value="a1">
          <Accordion.Trigger flexDirection="row" justifyContent="space-between">
            {({ open }: { open: boolean }) => (
              <>
                <Paragraph>1. Take a cold shower</Paragraph>
                <Square animation="quick" rotate={open ? '180deg' : '0deg'} />
              </>
            )}
          </Accordion.Trigger>
          <Accordion.HeightAnimator animation="bouncy">
            <Accordion.Content animation="bouncy" exitStyle={{ opacity: 0 }}>
              <Paragraph>
                Cold showers can help reduce inflammation, relieve pain, improve circulation, lower
                stress levels, and reduce muscle soreness and fatigue.
              </Paragraph>
            </Accordion.Content>
          </Accordion.HeightAnimator>
        </Accordion.Item>

        <Accordion.Item value="a2">
          <Accordion.Trigger flexDirection="row" justifyContent="space-between">
            {({ open }: { open: boolean }) => (
              <>
                <Paragraph>2. Eat 4 eggs</Paragraph>
                <Square animation="quick" rotate={open ? '180deg' : '0deg'} />
              </>
            )}
          </Accordion.Trigger>
          <Accordion.HeightAnimator animation="bouncy">
            <Accordion.Content animation="bouncy" exitStyle={{ opacity: 0 }}>
              <Paragraph>
                Eggs have been a dietary staple since time immemorial and there’s good reason for
                their continued presence in our menus and meals.
              </Paragraph>
            </Accordion.Content>
          </Accordion.HeightAnimator>
        </Accordion.Item>
      </Accordion>
      <AlertDialog native>
        <AlertDialog.Trigger asChild>
          <Button>Show Alert</Button>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <AlertDialog.Content
            bordered
            elevate
            key="content"
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            x={0}
            scale={1}
            opacity={1}
            y={0}>
            <YStack space>
              <AlertDialog.Title>Accept</AlertDialog.Title>
              <AlertDialog.Description>
                By pressing yes, you accept our terms and conditions.
              </AlertDialog.Description>

              <XStack gap="$3" justifyContent="flex-end">
                <AlertDialog.Cancel asChild>
                  <Button>Cancel</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button theme="active">Accept</Button>
                </AlertDialog.Action>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </ScrollView>
  );
}
